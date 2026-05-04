#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "Repo: $ROOT"
echo "Remote:"
git remote -v

ORIGIN_URL="$(git remote get-url origin 2>/dev/null || true)"
if [[ "$ORIGIN_URL" != https://github.com/* ]]; then
  echo
  echo "Expected HTTPS origin, but got:"
  echo "  $ORIGIN_URL"
  echo
  echo "Fix:"
  echo "  git remote set-url origin https://github.com/shortkings/short-kings-website.git"
  exit 1
fi

echo
echo "Pushing main -> origin (HTTPS)..."
echo "If this is your first HTTPS push, Git may prompt once; macOS Keychain can store credentials after that."
GIT_TERMINAL_PROMPT=1 git push -u origin main
