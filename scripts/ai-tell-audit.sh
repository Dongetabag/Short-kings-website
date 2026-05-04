#!/usr/bin/env bash
# Short Kings Empire — AI-tell audit.
# Fails the build when banned phrases or characters appear in user-facing copy.
# Adapted from the Eleven Views funnel skill, with Short Kings vocabulary preserved.

set -uo pipefail

ROOT="${1:-.}"
TARGET_DIRS=("$ROOT/src/app" "$ROOT/src/components")

# Files to exclude from the scan
EXCLUDES=(
  "*/api/*"           # API routes (system messages can use anything)
  "*/lib/*"           # logic, not copy
  "*globals.css*"     # color tokens, not copy
  "*node_modules*"
  "*.next*"
)

EX_ARGS=()
for e in "${EXCLUDES[@]}"; do EX_ARGS+=(--exclude="$e"); done

echo "→ Auditing: ${TARGET_DIRS[*]}"

errors=0
warns=0

# Hard fails — em-dashes and en-dashes
for d in "${TARGET_DIRS[@]}"; do
  [ -d "$d" ] || continue
  if grep -rn --binary-files=without-match -E "—|–" "${EX_ARGS[@]}" "$d" 2>/dev/null; then
    echo "✗ Em-dash or en-dash detected. Replace with comma, period, or restructure."
    errors=$((errors+1))
  fi
done

# Hard fails — banned vocabulary
BANNED_WORDS=(
  innovative leverage leveraging synergy seamless streamlined
  robust comprehensive cutting-edge state-of-the-art
  transformational transformative holistic best-in-class world-class
  empower empowering elevate elevating unlock unlocking
)
for word in "${BANNED_WORDS[@]}"; do
  for d in "${TARGET_DIRS[@]}"; do
    [ -d "$d" ] || continue
    if grep -rn --binary-files=without-match -i "\b${word}\b" "${EX_ARGS[@]}" "$d" 2>/dev/null; then
      echo "✗ Banned word: '${word}'"
      errors=$((errors+1))
    fi
  done
done

# Hard fails — banned phrases
BANNED_PHRASES=(
  "in a world where"
  "we don't just"
  "isn't just"
  "from .* to .*\\."
  "take it to the next level"
  "passionate team"
)
for phrase in "${BANNED_PHRASES[@]}"; do
  for d in "${TARGET_DIRS[@]}"; do
    [ -d "$d" ] || continue
    if grep -rin --binary-files=without-match -E "$phrase" "${EX_ARGS[@]}" "$d" 2>/dev/null; then
      echo "✗ Banned phrase: '${phrase}'"
      errors=$((errors+1))
    fi
  done
done

# Warnings — generic CTAs
for cta in "Learn more" "Get started" "Click here"; do
  for d in "${TARGET_DIRS[@]}"; do
    [ -d "$d" ] || continue
    if grep -rin --binary-files=without-match "$cta" "${EX_ARGS[@]}" "$d" 2>/dev/null; then
      echo "⚠ Generic CTA: '${cta}' — consider a verb-specific replacement."
      warns=$((warns+1))
    fi
  done
done

echo ""
if [ "$errors" -gt 0 ]; then
  echo "✗ Audit FAILED — ${errors} hard violation(s), ${warns} warning(s)."
  exit 1
fi

if [ "$warns" -gt 0 ]; then
  echo "✓ Audit passed with ${warns} warning(s). Consider tightening."
else
  echo "✓ Audit passed clean."
fi
