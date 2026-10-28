#!/usr/bin/env bash
set -euo pipefail

ARCHIVE=/tmp/kcinduction-inquiry-v2.tar.gz
RELEASE_ROOT=/www/wwwroot/kcinduction-releases
CURRENT_LINK=/www/wwwroot/kcinduction-live
RELEASE="$RELEASE_ROOT/40c42e4-$(date +%Y%m%d%H%M%S)"
PREVIOUS="$(readlink -f "$CURRENT_LINK" 2>/dev/null || true)"

test -f "$ARCHIVE"
mkdir -p "$RELEASE_ROOT" "$RELEASE"
tar -xzf "$ARCHIVE" -C "$RELEASE"
test -f "$RELEASE/server.js"
test -f "$RELEASE/public/images/kc/products/mf-power-supply.webp"

for env_file in /www/wwwroot/kcinduction/.env*; do
  if [[ -f "$env_file" ]]; then
    cp -a "$env_file" "$RELEASE/"
  fi
done

pm2 delete kcinduction >/dev/null 2>&1 || true
cd "$RELEASE"
PORT=3000 HOSTNAME=127.0.0.1 pm2 start server.js --name kcinduction --cwd "$RELEASE" --update-env

if ! curl --noproxy '*' --fail --silent --show-error --max-time 15 -o /dev/null http://127.0.0.1:3000/contact; then
  echo 'New release failed health check.' >&2
  pm2 delete kcinduction >/dev/null 2>&1 || true
  if [[ -n "$PREVIOUS" && -f "$PREVIOUS/server.js" ]]; then
    cd "$PREVIOUS"
    PORT=3000 HOSTNAME=127.0.0.1 pm2 start server.js --name kcinduction --cwd "$PREVIOUS" --update-env
    pm2 save
    echo "Restored previous release: $PREVIOUS" >&2
  fi
  exit 1
fi

ln -sfn "$RELEASE" "$CURRENT_LINK"
pm2 save
echo "Active release: $RELEASE"
curl --noproxy '*' --fail --silent --show-error -I http://127.0.0.1:3000/contact
