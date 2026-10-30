#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$APP_DIR"

export DEPLOY_HOST="${DEPLOY_HOST:-root@94.249.174.172}"
export REMOTE_ARCHIVE="${REMOTE_ARCHIVE:-/tmp/kcinduction-release.tar.gz}"
export REMOTE_ROOT="${REMOTE_ROOT:-/www/wwwroot/kcinduction-releases}"
export CURRENT_LINK="${CURRENT_LINK:-/www/wwwroot/kcinduction-live}"
export REMOTE_ENV="${REMOTE_ENV:-/opt/kcinduction.env}"
export PM2_APP="${PM2_APP:-kcinduction}"
export APP_PORT="${APP_PORT:-3000}"
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=8192}"

echo "KC Induction: build here, deploy to $DEPLOY_HOST"
echo "Repository: $APP_DIR"

# Do not discard edits or deploy a mixture of local and remote source files.
git diff --quiet || { echo "Tracked files have uncommitted changes." >&2; exit 1; }
git diff --cached --quiet || { echo "Staged files have uncommitted changes." >&2; exit 1; }
git fetch origin main
git checkout main
git pull --ff-only origin main

exec bash "$APP_DIR/scripts/build-and-deploy.sh"
