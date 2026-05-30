# ELE-1466 — Production Manifest

This is the executable hand-off doc. Every clip path is verified to exist in `public/media/`. Every duration is a *target* (the editor cuts to the VO, not the other way around).

**Environment note.** This Paperclip container does NOT have the media pipeline (ffmpeg / Remotion / Kokoro). All render commands below must run on the **Eleven Views Desk** (`/opt/remotion-tools/` + `tts-local` + `video-narrate`). To run, `rsync` this folder + `public/media/` to the desk and execute the commands in `## Render`.

---

## 1. Asset inventory (verified)

All paths are relative to repo root.

| Scene | Asset(s) |
|---|---|
| S1 cold open | `public/media/lifestyle/insecure-men.mp4` |
| S2 enemy | `public/media/gallery/most insecure men copy.mp4` · `public/media/gallery/lack of attraction copy.mp4` · `public/media/dating/hinge.mp4` |
| S3 stats | `public/media/lifestyle/why-profiles-fail.mp4` · `public/media/gallery/dating funnel vid(1) copy.mp4` |
| S4 mirror | `public/media/gallery/unpredictable copy.mp4` · `public/media/lifestyle/lifestyle-3.jpg` · `public/media/lifestyle/lifestyle-7.jpg` |
| S5 turn | `public/media/lifestyle/mentorship.mp4` · `public/media/gallery/mentorship darian copy.mp4` · `public/media/lifestyle/inspire.mp4` |
| S6 meet Axel | `public/media/lifestyle/axel-lifestyle-1.jpg` · `public/media/lifestyle/axel-lifestyle-2.jpg` · `public/media/gallery/Axel-27.JPG` · `public/media/throne-room/portrait-1.jpg` |
| S7 P1 (Algorithm) | `public/media/dating/hinge-prompts.mp4` · `public/media/dating/attraction-secrets.mp4` |
| S7 P2 (Frame) | `public/media/gallery/unpredictable copy.mp4` · `public/media/lifestyle/take-risks.mp4` |
| S7 P3 (Look) | `public/media/gallery/fashon tips copy.mp4` · `public/media/throne-room/style-clip-1.mp4` · `public/media/throne-room/best-shirts.mp4` |
| S7 P4 (Room) | `public/media/gallery/rizz breakdown copy.mp4` · `public/media/dating/dating-vs-sales.mp4` · `public/media/gallery/pedestal copy.mp4` |
| S8 proof | `public/media/testimonials/member-1.png` · `member-2.png` · `member-3.png` · `member-4.png` · `testimonial-1.jpg` · `testimonial-2.jpg` · `testimonial-3.jpg` · `testimonial-4.jpg` · `success-1.jpg` |
| S9 offer | `public/media/lifestyle/god-first.mp4` · `public/media/gallery/Inspire copy.mp4` · `public/media/lifestyle/transformation.mp4` |
| S10 cost | (callback to S1 + S2 clips) |
| S11 close | `public/media/lifestyle/inspire.mp4` · `public/media/lifestyle/transformation.mp4` · `public/media/throne-room/hero-video.mp4` |

Verification command (run from repo root):
```bash
while read -r f; do [ -e "$f" ] && echo "OK  $f" || echo "MISS $f"; done < private/short-kings-sales-video/asset-checklist.txt
```

---

## 2. Remotion composition outline

Create at `/opt/remotion-tools/src/ShortKingsEmpire.tsx`, register in `src/Root.tsx`.

```
Comp: ShortKingsEmpire   1920x1080  30fps  total duration: 5:30 (= 9900 frames)
Comp: ShortKingsEmpireVert  1080x1920  30fps  (re-uses same scene components)
```

### Composition structure

```tsx
<Composition
  id="ShortKingsEmpire"
  component={ShortKingsEmpire}
  durationInFrames={9900}
  fps={30}
  width={1920}
  height={1080}
  defaultProps={{ narrationSrc: staticFile('narration/full.mp3') }}
/>
```

### Scene component contract

Each `<Scene>` accepts:
- `startFrame` / `durationFrames`
- `clips: Array<{ src: string; inFrame: number; outFrame: number; volume?: 0 }>` (volume defaults to 0 — VO is on the master audio track)
- `caption: string` (rendered burned-in over a black-box gradient at bottom)
- `colorGrade: 'cool' | 'warm'`

Pillar / offer / end cards use a dedicated `<TitleCard numeral={1} title="Beat the Algorithm" sub="…" />` component with the brand gold (`#D4AF37`) for the numeral.

---

## 3. Caption blocks (one line at a time, burn-in)

PT 1:
1. *"You keep getting passed over."*
2. *"Not because of your face."*
3. *"Not because of your photos."*
4. *"Not because of bad luck."*
5. *"Because of the way you walk into a room."*
6. *"Already apologizing for the space you take up."*
7. *"You match. Sometimes."*
8. *"The conversation dies anyway."*
9. *"'Just be confident, bro.'"*
10. *"None of them have lived a single day at your eye level."*
11. **94% of men under 5'9 say height has cost them at least one connection.**
12. **82% of women say confidence outranks height.** *(source: Bumble 2024)*
13. **67% of long-term partners are within 2 inches of each other.** *(source: Pew Research)*
14. *"The game isn't rigged against you."*
15. *"You just haven't been taught how to play it."*
16. *"Some days you feel unstoppable."*
17. *"One rejection sends you spiraling for a week."*
18. *"That's not a *you* problem."*
19. *"That's a no-one-ever-taught-you problem."*
20. *"You are not the first man to sit exactly where you're sitting."*
21. *"They walk into rooms now. They own them."*
22. *"Not because they grew. Because they learned to lead."*
23. **HIS NAME IS AXEL.**

PT 2:
24. **Axel didn't read about this. He lived it.**
25. *"He's in one corner. Yours."*
26. **THE FOUR PILLARS**
27. **1 · BEAT THE ALGORITHM**
28. **2 · REBUILD THE FRAME**
29. **3 · ENGINEER YOUR LOOK**
30. **4 · COMMAND THE ROOM**
31. **Algorithm. Frame. Look. Room.**
32. **MARCUS T. · 5'6 · DALLAS, TX · 1-on-1 Coaching**
33. *"More matches in 2 weeks than the previous 6 months."*
34. **JAMES R. · 5'5 · ATLANTA, GA · 1-on-1 Coaching**
35. *"She texted me first the next morning."*
36. **KEVIN M. · 5'8 · PUERTO RICO · The Empire**
37. *"Lost 12 pounds in 6 weeks. Body changed; then everything else."*
38. **RAFAEL G. · 5'5 · SAN ANTONIO, TX · The Empire**
39. *"Two months in — met someone."*
40. **THE EMPIRE**
41. **$997 · 3 months · ~$332/mo**
42. **Affirm · Afterpay**
43. **Limited to 5 clients.**
44. *"A thousand dollars doesn't build the Empire. The decision does."*
45. **Short Kings · Work with Axel · The Empire is open · Five seats.**

---

## 4. Narration generation (Kokoro local — free, unlimited)

Run on the Eleven Views Desk:

```bash
# Concat both halves into one narration track
cat private/short-kings-sales-video/narration/pt1-full.txt \
    private/short-kings-sales-video/narration/pt2-full.txt \
  > /tmp/sk-narration.txt

tts-local @/tmp/sk-narration.txt \
  /opt/remotion-tools/public/narration/full.mp3 \
  --voice am_michael \
  --speed 0.98

# Verify duration (should be ~5:25-5:35)
ffprobe -v error -show_entries format=duration /opt/remotion-tools/public/narration/full.mp3
```

If voice feels too bright, swap to `am_onyx`. Keep `--speed` between 0.95 and 1.00.

---

## 5. Render

```bash
cd /opt/remotion-tools

# Master landscape
npx remotion render src/index.tsx ShortKingsEmpire \
  /tmp/sk-empire-1920.mp4 \
  --log=error \
  --concurrency=2

# Mux narration + grade audio
video-narrate /tmp/sk-empire-1920.mp4 \
  /opt/remotion-tools/public/narration/full.mp3 \
  /tmp/sk-empire-1920-final.mp4 \
  --mode pad

# Vertical cutdown
npx remotion render src/index.tsx ShortKingsEmpireVert \
  /tmp/sk-empire-1080.mp4 \
  --log=error \
  --concurrency=2

video-narrate /tmp/sk-empire-1080.mp4 \
  /opt/remotion-tools/public/narration/full.mp3 \
  /tmp/sk-empire-1080-final.mp4 \
  --mode pad

# Compress if either is over 50MB
for f in /tmp/sk-empire-*-final.mp4; do
  size=$(stat -c%s "$f")
  if [ "$size" -gt 52428800 ]; then
    ffmpeg -i "$f" -c:v libx264 -crf 23 -preset slow -c:a copy "${f%.mp4}-x264.mp4"
  fi
done

# Verify
ffprobe -v error -show_entries format=duration:stream=codec_name /tmp/sk-empire-1920-final.mp4
ffprobe -v error -show_entries format=duration:stream=codec_name /tmp/sk-empire-1080-final.mp4
```

---

## 6. Upload + deliver

```bash
TODAY=$(date -u +%Y-%m-%d)
rclone copy /tmp/sk-empire-1920-final.mp4 \
  wasabi:eleven-views-media/By\ Agent/atlas/${TODAY}/short-kings/

rclone copy /tmp/sk-empire-1080-final.mp4 \
  wasabi:eleven-views-media/By\ Agent/atlas/${TODAY}/short-kings/

rclone link --expire 24h \
  wasabi:eleven-views-media/By\ Agent/atlas/${TODAY}/short-kings/sk-empire-1920-final.mp4
rclone link --expire 24h \
  wasabi:eleven-views-media/By\ Agent/atlas/${TODAY}/short-kings/sk-empire-1080-final.mp4
```

Then comment both signed URLs on Paperclip issue **ELE-1466** with:
- VO voice used (`am_michael` or fallback)
- Total runtime
- File sizes
- Master + vertical links

---

## 7. Quality gate (target: 96+)

Before ship, check against this rubric:

| Criterion | Weight | Pass condition |
|---|---|---|
| **Hook (0–10s)** | 10 | "Passed over" cold open lands within 8s; viewer feels named, not sold to. |
| **Site fidelity** | 15 | Every name, height, city, stat, price matches `home-funnel.ts` / `site.ts` / `testimonials/page.tsx`. |
| **Mechanism clarity** | 15 | The four pillars (Algorithm · Frame · Look · Room) are crisp and not blurred into one. |
| **Proof concentration** | 10 | 4 testimonials, all 5'5–5'8, all named, all attributed to a real product. |
| **Offer specificity** | 15 | The Empire pitched with exact $997, ~$332/mo, 3 mo, 5-client cap, Affirm/Afterpay, the *specific* Empire-only features (WhatsApp convo review, weekly calls, profile monitoring, gym program, direct number). |
| **Voice quality** | 10 | `am_michael` with downward statements; no upspeak; emphasis words land. |
| **Visual coherence** | 10 | Cool/desat in PT1, warm/saturated from S5 onward; no stylized faces on testimonials. |
| **Captions** | 5 | Burn-in, gold-highlighted emphasis words, 100% readable on mobile vertical. |
| **CTA clarity** | 5 | Final card is one decision: *Apply for The Empire → /products* + assessment fallback. |
| **No-hype rule** | 5 | Zero "guru" filler, no fake scarcity, no "guaranteed." |

Hit 96+ before sending to Simeon.
