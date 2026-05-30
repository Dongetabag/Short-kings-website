# ELE-1466 — Short Kings Sales Video · Production Package

**Status:** script locked + production scaffolded. **Render is blocked here** — this Paperclip container has no `ffmpeg` / Remotion / Kokoro pipeline. The package below is structured so the Eleven Views Desk (or a human editor) can finish it in one pass.

## What's in this folder

| File | Purpose |
|---|---|
| `ELE-1466-script.md` | The locked script — VO, visuals, voice direction, music, color, captions. Source of truth. |
| `production-manifest.md` | Shot-by-shot asset list with verified paths, timing table (in frames), exact TTS + render + upload commands. |
| `narration/pt1-full.txt` | Part 1 VO text (~2:21 at `am_michael` default cadence). Feed directly to `tts-local`. |
| `narration/pt2-full.txt` | Part 2 VO text (~3:30). Feed directly to `tts-local`. |
| `ShortKingsEmpire.tsx` | Remotion composition scaffold — landscape + vertical, 30 fps, ~5:50 runtime. Drop into `/opt/remotion-tools/src/` and register in `Root.tsx`. |
| `asset-checklist.txt` | The 38 source clips/images the composition references — all verified present in `public/media/`. |

## How to ship the video (from the Eleven Views Desk)

```bash
# 1. Sync source media + scaffold + narration into Remotion's public/
rsync -a public/media/ /opt/remotion-tools/public/sk-media/
mkdir -p /opt/remotion-tools/public/narration
cp private/short-kings-sales-video/ShortKingsEmpire.tsx /opt/remotion-tools/src/
# (then add the two <Composition> entries to Root.tsx — see top of ShortKingsEmpire.tsx)

# 2. Render narration (free, local Kokoro — voice am_michael)
cat private/short-kings-sales-video/narration/pt1-full.txt \
    private/short-kings-sales-video/narration/pt2-full.txt \
  > /tmp/sk-narration.txt
tts-local @/tmp/sk-narration.txt \
  /opt/remotion-tools/public/narration/full.mp3 \
  --voice am_michael --speed 0.98

# 3. Confirm narration duration, then update durationInFrames in Root.tsx if needed
ffprobe -v error -show_entries format=duration /opt/remotion-tools/public/narration/full.mp3

# 4. Render master + vertical, mux, upload — see production-manifest.md § 5–6
```

## Why The Empire ($997) and not generic $1k coaching

Simeon's brief said "essentially $1000 on 1-1 dating coaching." The live site has two coaching SKUs:

- **The Inner Circle** — $150/month (1-on-1, month-to-month). Not the $1k product.
- **The Empire** — **$997 · 3 months · limited to 5 clients**. Done-with-you. Weekly calls + WhatsApp conversation review + active profile monitoring + Built Different gym + direct number. This is the $1k product. **The video pitches this one.**

If Simeon wants the video pitching Inner Circle instead, the only edits are Scene 9 (the offer card) + Scene 10's "thousand dollars" line.

## Quality gate

See `production-manifest.md` § 7. Target: 96+. Rubric covers hook, site fidelity, mechanism clarity, proof concentration, offer specificity, voice quality, visual coherence, captions, CTA clarity, no-hype rule.

## Open questions for Simeon

1. **Voice** — Kokoro `am_michael` (warm/authoritative, free, default) vs ElevenLabs cloned "Atlas" or another premium voice? Local TTS is fine for v1 sales tests; premium when scaling.
2. **Music** — license track? Or freelance composer? Manifest specifies "low cinematic pad → rising strings."
3. **Length** — current cut is ~5:50. Confirm OK or trim to a tighter ~4:30.
4. **Final CTA URL** — locked to `/products` + `/dating/start`. Confirm before render.
