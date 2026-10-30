#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$APP_DIR"

DEPLOY_HOST="${DEPLOY_HOST:-root@94.249.174.172}"
REMOTE_ARCHIVE="${REMOTE_ARCHIVE:-/tmp/kcinduction-release.tar.gz}"
REMOTE_ROOT="${REMOTE_ROOT:-/www/wwwroot/kcinduction-releases}"
CURRENT_LINK="${CURRENT_LINK:-/www/wwwroot/kcinduction-live}"
REMOTE_ENV="${REMOTE_ENV:-/opt/kcinduction.env}"
PM2_APP="${PM2_APP:-kcinduction}"
APP_PORT="${APP_PORT:-3000}"
BUILD_DIR=".next-deploy"
BUILD_PATH="$APP_DIR/$BUILD_DIR"
NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=8192}"
export NODE_OPTIONS NEXT_TELEMETRY_DISABLED=1 KC_BUILD_DIR="$BUILD_DIR"

for command in node npm git tar scp ssh; do
  command -v "$command" >/dev/null || { echo "Missing build-server command: $command" >&2; exit 1; }
done
[[ "$(uname -s)" == Linux ]] || { echo "The build server must run Linux." >&2; exit 1; }
node -e 'const [major, minor] = process.versions.node.split(".").map(Number); if (major < 20 || (major === 20 && minor < 9)) process.exit(1)' || { echo "Node.js 20.9+ is required." >&2; exit 1; }
[[ "$REMOTE_ARCHIVE" == /tmp/kcinduction-*.tar.gz ]] || { echo "REMOTE_ARCHIVE must be a kcinduction tarball under /tmp." >&2; exit 1; }
[[ "$REMOTE_ROOT" == /www/wwwroot/kcinduction-releases ]] || { echo "Unexpected REMOTE_ROOT." >&2; exit 1; }
[[ "$CURRENT_LINK" == /www/wwwroot/kcinduction-live ]] || { echo "Unexpected CURRENT_LINK." >&2; exit 1; }
[[ "$PM2_APP" == kcinduction ]] || { echo "Unexpected PM2_APP." >&2; exit 1; }
[[ "$APP_PORT" =~ ^[0-9]{2,5}$ ]] || { echo "Invalid APP_PORT." >&2; exit 1; }
[[ "$REMOTE_ENV" =~ ^/[A-Za-z0-9_./-]+$ ]] || { echo "Invalid REMOTE_ENV." >&2; exit 1; }
[[ "$DEPLOY_HOST" =~ ^[A-Za-z0-9_.@-]+$ ]] || { echo "Invalid DEPLOY_HOST." >&2; exit 1; }

SHA="$(git rev-parse --short=12 HEAD)"
ARCH="$(uname -m)"
ARCHIVE="$(mktemp /tmp/kcinduction-release.XXXXXXXX.tar.gz)"
STAGE="$(mktemp -d /tmp/kcinduction-stage.XXXXXXXX)"
trap '[[ "$STAGE" == /tmp/kcinduction-stage.* ]] && rm -rf -- "$STAGE"' EXIT

echo "Building commit $SHA on $ARCH"
npm ci --no-audit --no-fund
npm run build

test -f "$BUILD_PATH/standalone/server.js"
test -d "$BUILD_PATH/static"
test -f "$APP_DIR/public/images/kc/home/factory-proof/open-cabinet.webp"
cp -a "$BUILD_PATH/standalone/." "$STAGE/"
mkdir -p "$STAGE/$BUILD_DIR"
cp -a "$BUILD_PATH/static" "$STAGE/$BUILD_DIR/static"
cp -a "$APP_DIR/public" "$STAGE/public"
printf '%s\n' "$SHA" > "$STAGE/RELEASE_COMMIT"
test -f "$STAGE/server.js"
test -f "$BUILD_PATH/BUILD_ID"
tar -C "$STAGE" -czf "$ARCHIVE" .
echo "Package: $ARCHIVE ($(du -h "$ARCHIVE" | cut -f1))"

# One SCP and one SSH connection: password authentication prompts twice.
scp -o StrictHostKeyChecking=accept-new "$ARCHIVE" "$DEPLOY_HOST:$REMOTE_ARCHIVE"
printf -v remote_args '%q ' "$REMOTE_ARCHIVE" "$REMOTE_ROOT" "$CURRENT_LINK" "$REMOTE_ENV" "$PM2_APP" "$APP_PORT" "$SHA" "$ARCH"
ssh -o StrictHostKeyChecking=accept-new "$DEPLOY_HOST" "bash -s -- $remote_args" < "$APP_DIR/scripts/activate-release.sh"

echo "Deployment complete: $SHA"
echo "Public DNS/cache and domain cutover still require a separate check."
