#!/usr/bin/env bash
set -Eeuo pipefail

ARCHIVE="$1"
RELEASE_ROOT="$2"
CURRENT_LINK="$3"
REMOTE_ENV="$4"
PM2_APP="$5"
APP_PORT="$6"
SHA="$7"
BUILD_ARCH="$8"

[[ "$ARCHIVE" == /tmp/kcinduction-*.tar.gz ]] || exit 1
[[ "$RELEASE_ROOT" == /www/wwwroot/kcinduction-releases ]] || exit 1
[[ "$CURRENT_LINK" == /www/wwwroot/kcinduction-live ]] || exit 1
[[ "$PM2_APP" == kcinduction ]] || exit 1
[[ "$APP_PORT" =~ ^[0-9]{2,5}$ ]] || exit 1
[[ "$SHA" =~ ^[0-9a-f]{12}$ ]] || exit 1
[[ "$REMOTE_ENV" =~ ^/[A-Za-z0-9_./-]+$ ]] || exit 1
[[ "$(uname -m)" == "$BUILD_ARCH" ]] || { echo "Build/target CPU architecture mismatch." >&2; exit 1; }
[[ ! -e "$CURRENT_LINK" || -L "$CURRENT_LINK" ]] || { echo "Current path is not a symlink; refusing to replace it." >&2; exit 1; }

for command in node pm2 curl tar; do
  command -v "$command" >/dev/null || { echo "Missing target-server command: $command" >&2; exit 1; }
done
test -f "$ARCHIVE"
PREVIOUS="$(readlink -f "$CURRENT_LINK" 2>/dev/null || true)"
RELEASE="$RELEASE_ROOT/$SHA-$(date +%Y%m%d%H%M%S)"
mkdir -p "$RELEASE_ROOT" "$RELEASE"
tar -xzf "$ARCHIVE" -C "$RELEASE"
test -f "$RELEASE/server.js"
test -f "$RELEASE/public/images/kc/home/factory-proof/open-cabinet.webp"
test "$(cat "$RELEASE/RELEASE_COMMIT")" = "$SHA"

# Configuration stays on the target server, never in the uploaded archive.
if [[ -f "$REMOTE_ENV" ]]; then
  cp -a "$REMOTE_ENV" "$RELEASE/.env.production"
elif [[ -n "$PREVIOUS" && -f "$PREVIOUS/.env.production" ]]; then
  cp -a "$PREVIOUS/.env.production" "$RELEASE/.env.production"
else
  for env_file in /www/wwwroot/kcinduction/.env*; do
    [[ -f "$env_file" ]] && cp -a "$env_file" "$RELEASE/"
  done
fi

start_app() {
  local directory="$1"
  cd "$directory"
  PORT="$APP_PORT" HOSTNAME=127.0.0.1 NODE_ENV=production pm2 start server.js --name "$PM2_APP" --cwd "$directory" --update-env
}

rollback() {
  pm2 delete "$PM2_APP" >/dev/null 2>&1 || true
  if [[ -n "$PREVIOUS" && -f "$PREVIOUS/server.js" ]]; then
    start_app "$PREVIOUS"
    pm2 save
    echo "Health check failed; restored $PREVIOUS" >&2
  else
    echo "Health check failed; no previous release is available." >&2
  fi
}

pm2 delete "$PM2_APP" >/dev/null 2>&1 || true
if ! start_app "$RELEASE"; then rollback; exit 1; fi

healthy=0
for attempt in 1 2 3 4 5; do
  if curl --noproxy '*' --fail --silent --show-error --max-time 10 -o /dev/null "http://127.0.0.1:$APP_PORT/" \
    && curl --noproxy '*' --fail --silent --show-error --max-time 10 -o /dev/null "http://127.0.0.1:$APP_PORT/products" \
    && curl --noproxy '*' --fail --silent --show-error --max-time 10 -o /dev/null "http://127.0.0.1:$APP_PORT/contact" \
    && curl --noproxy '*' --fail --silent --show-error --max-time 10 -o /dev/null "http://127.0.0.1:$APP_PORT/images/kc/home/factory-proof/open-cabinet.webp"; then
    healthy=1
    break
  fi
  sleep 2
done
if [[ "$healthy" != 1 ]]; then rollback; exit 1; fi

NEXT_LINK="$CURRENT_LINK.next.$$"
ln -s "$RELEASE" "$NEXT_LINK"
mv -Tf "$NEXT_LINK" "$CURRENT_LINK"
pm2 save
echo "Active release: $RELEASE"
echo "Previous release: ${PREVIOUS:-none}"
