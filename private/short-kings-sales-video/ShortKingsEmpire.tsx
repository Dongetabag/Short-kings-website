// Drop this file at /opt/remotion-tools/src/ShortKingsEmpire.tsx on the Eleven Views Desk.
// Register the composition by adding two <Composition> entries to /opt/remotion-tools/src/Root.tsx:
//
//   import { ShortKingsEmpire, ShortKingsEmpireVert } from './ShortKingsEmpire';
//
//   <Composition id="ShortKingsEmpire"      component={ShortKingsEmpire}     durationInFrames={9900} fps={30} width={1920} height={1080} />
//   <Composition id="ShortKingsEmpireVert" component={ShortKingsEmpireVert} durationInFrames={9900} fps={30} width={1080} height={1920} />
//
// Before rendering, sync the project's public/media/ into /opt/remotion-tools/public/sk-media/
// and the narration mp3 to /opt/remotion-tools/public/narration/full.mp3
// (see production-manifest.md § 4 + § 5).
//
// Audio is a single Audio element on the master track — every Video clip uses muted={true}.

import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  Video,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

const FPS = 30;
const f = (sec: number) => Math.round(sec * FPS);

// Brand
const GOLD = '#D4AF37';
const RUBY = '#DC2626';
const BLACK = '#0A0A0A';

type ClipSpec = {
  src: string; // path relative to public/sk-media/ OR public/
  inFrame: number;
  durationFrames: number;
  // 'video' is inferred from extension; PNG/JPG => Img
};

const m = (rel: string) => staticFile(`sk-media/${rel}`);
const isVideo = (p: string) => /\.(mp4|mov|webm)$/i.test(p);

const Caption: React.FC<{ text: string; emphasis?: boolean }> = ({ text, emphasis }) => (
  <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 120 }}>
    <div
      style={{
        background: 'rgba(0,0,0,0.78)',
        padding: '18px 32px',
        borderRadius: 6,
        maxWidth: '85%',
        textAlign: 'center',
        color: emphasis ? GOLD : '#FFF',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 56,
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
        textTransform: emphasis ? 'uppercase' : 'none',
      }}
    >
      {text}
    </div>
  </AbsoluteFill>
);

const Grade: React.FC<{ tone: 'cool' | 'warm'; children: React.ReactNode }> = ({ tone, children }) => (
  <AbsoluteFill>
    {children}
    <AbsoluteFill
      style={{
        background:
          tone === 'cool'
            ? 'linear-gradient(180deg, rgba(20,40,60,0.18), rgba(10,20,30,0.32))'
            : 'linear-gradient(180deg, rgba(60,40,20,0.16), rgba(20,10,4,0.30))',
        mixBlendMode: 'multiply',
      }}
    />
  </AbsoluteFill>
);

const Clip: React.FC<{ spec: ClipSpec }> = ({ spec }) => {
  const src = m(spec.src);
  return isVideo(spec.src) ? (
    <Video src={src} muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  ) : (
    <Img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  );
};

const Scene: React.FC<{
  startFrame: number;
  durationFrames: number;
  clips: ClipSpec[];
  caption?: string;
  emphasis?: boolean;
  tone: 'cool' | 'warm';
}> = ({ startFrame, durationFrames, clips, caption, emphasis, tone }) => (
  <Sequence from={startFrame} durationInFrames={durationFrames}>
    <AbsoluteFill style={{ backgroundColor: BLACK }}>
      <Grade tone={tone}>
        {clips.map((c, i) => (
          <Sequence key={i} from={c.inFrame} durationInFrames={c.durationFrames}>
            <Clip spec={c} />
          </Sequence>
        ))}
      </Grade>
      {caption && <Caption text={caption} emphasis={emphasis} />}
    </AbsoluteFill>
  </Sequence>
);

const TitleCard: React.FC<{
  startFrame: number;
  durationFrames: number;
  numeral?: string;
  title: string;
  sub?: string;
  background?: ClipSpec;
}> = ({ startFrame, durationFrames, numeral, title, sub, background }) => (
  <Sequence from={startFrame} durationInFrames={durationFrames}>
    <AbsoluteFill style={{ backgroundColor: BLACK }}>
      {background && (
        <AbsoluteFill style={{ opacity: 0.35 }}>
          <Clip spec={background} />
        </AbsoluteFill>
      )}
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        {numeral && (
          <div style={{ color: GOLD, fontSize: 280, fontWeight: 900, lineHeight: 1, fontFamily: 'Inter' }}>
            {numeral}
          </div>
        )}
        <div style={{ color: '#FFF', fontSize: 96, fontWeight: 900, marginTop: 16, fontFamily: 'Inter', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
          {title}
        </div>
        {sub && (
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 36, fontWeight: 500, marginTop: 18, maxWidth: 1200, lineHeight: 1.3 }}>
            {sub}
          </div>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  </Sequence>
);

// =============== TIMING TABLE (frames @ 30 fps) ===============
// Scene             start    duration
// S1 cold open      0        14s = 420
// S2 enemy          420      31s = 930
// S3 stats          1350     25s = 750
// S4 mirror         2100     30s = 900
// S5 turn           3000     35s = 1050
// PT1 end card      4050     6s  = 180   (total PT1 = 4230f / ~2:21)
// S6 meet Axel      4230     35s = 1050
// S7 pillars        5280     75s = 2250
// S8 proof          7530     50s = 1500
// S9 offer          9030     20s = 600
// S10 cost          9630     15s = 450
// S11 close        10080     15s = 450
// END             10530         (~5:51)
// (Adjust durationInFrames in <Composition> to match exact narration length once full.mp3 is rendered.)

const Composition: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BLACK }}>
      <Audio src={staticFile('narration/full.mp3')} />

      {/* S1 — Cold open */}
      <Scene
        startFrame={0}
        durationFrames={420}
        tone="cool"
        clips={[{ src: 'lifestyle/insecure-men.mp4', inFrame: 0, durationFrames: 420 }]}
        caption="You keep getting passed over."
      />

      {/* S2 — Name the enemy */}
      <Scene
        startFrame={420}
        durationFrames={930}
        tone="cool"
        clips={[
          { src: 'gallery/most insecure men copy.mp4', inFrame: 0, durationFrames: 300 },
          { src: 'gallery/lack of attraction copy.mp4', inFrame: 300, durationFrames: 330 },
          { src: 'dating/hinge.mp4', inFrame: 630, durationFrames: 300 },
        ]}
        caption="'Just be confident, bro.'"
      />

      {/* S3 — Stats */}
      <TitleCard startFrame={1350} durationFrames={250} title="94%" sub="of men under 5'9 say height has cost them at least one connection." background={{ src: 'lifestyle/why-profiles-fail.mp4', inFrame: 0, durationFrames: 250 }} />
      <TitleCard startFrame={1600} durationFrames={250} title="82%" sub="of women say confidence outranks height. — Bumble, 2024" background={{ src: 'gallery/dating funnel vid(1) copy.mp4', inFrame: 0, durationFrames: 250 }} />
      <TitleCard startFrame={1850} durationFrames={250} title="67%" sub="of long-term partners are within 2 inches of each other. — Pew" background={{ src: 'lifestyle/why-profiles-fail.mp4', inFrame: 250, durationFrames: 250 }} />

      {/* S4 — Mirror */}
      <Scene
        startFrame={2100}
        durationFrames={900}
        tone="cool"
        clips={[
          { src: 'gallery/unpredictable copy.mp4', inFrame: 0, durationFrames: 450 },
          { src: 'lifestyle/lifestyle-3.jpg', inFrame: 450, durationFrames: 225 },
          { src: 'lifestyle/lifestyle-7.jpg', inFrame: 675, durationFrames: 225 },
        ]}
        caption="That's a no-one-ever-taught-you problem."
      />

      {/* S5 — Turn (color shift) */}
      <Scene
        startFrame={3000}
        durationFrames={1050}
        tone="warm"
        clips={[
          { src: 'lifestyle/mentorship.mp4', inFrame: 0, durationFrames: 360 },
          { src: 'gallery/mentorship darian copy.mp4', inFrame: 360, durationFrames: 360 },
          { src: 'lifestyle/inspire.mp4', inFrame: 720, durationFrames: 330 },
        ]}
        caption="His name is Axel."
        emphasis
      />

      {/* PT1 end card */}
      <TitleCard startFrame={4050} durationFrames={180} title="Part 2" sub="How the Empire gets built." />

      {/* S6 — Meet Axel */}
      <Scene
        startFrame={4230}
        durationFrames={1050}
        tone="warm"
        clips={[
          { src: 'lifestyle/axel-lifestyle-1.jpg', inFrame: 0, durationFrames: 240 },
          { src: 'lifestyle/axel-lifestyle-2.jpg', inFrame: 240, durationFrames: 240 },
          { src: 'gallery/Axel-27.JPG', inFrame: 480, durationFrames: 270 },
          { src: 'throne-room/portrait-1.jpg', inFrame: 750, durationFrames: 300 },
        ]}
        caption="In one corner. Yours."
      />

      {/* S7 — Four Pillars (60f title + B-roll under VO) */}
      <TitleCard startFrame={5280} durationFrames={540} numeral="1" title="Beat the Algorithm" sub="The app was built against you. We build around it." background={{ src: 'dating/hinge-prompts.mp4', inFrame: 0, durationFrames: 540 }} />
      <TitleCard startFrame={5820} durationFrames={540} numeral="2" title="Rebuild the Frame" sub="The way you carry yourself. The way you stop flinching." background={{ src: 'gallery/unpredictable copy.mp4', inFrame: 0, durationFrames: 540 }} />
      <TitleCard startFrame={6360} durationFrames={540} numeral="3" title="Engineer Your Look" sub="Fit, proportion, grooming — tuned to your frame." background={{ src: 'gallery/fashon tips copy.mp4', inFrame: 0, durationFrames: 540 }} />
      <TitleCard startFrame={6900} durationFrames={630} numeral="4" title="Command the Room" sub="Entry posture. Voice tempo. The first ten seconds." background={{ src: 'gallery/rizz breakdown copy.mp4', inFrame: 0, durationFrames: 630 }} />

      {/* S8 — Proof (each testimonial: photo + caption block) */}
      <Scene startFrame={7530} durationFrames={375} tone="warm"
        clips={[{ src: 'testimonials/member-1.png', inFrame: 0, durationFrames: 375 }]}
        caption="MARCUS T. · 5'6 · DALLAS · 1-on-1" emphasis />
      <Scene startFrame={7905} durationFrames={375} tone="warm"
        clips={[{ src: 'testimonials/member-2.png', inFrame: 0, durationFrames: 375 }]}
        caption="JAMES R. · 5'5 · ATLANTA · 1-on-1" emphasis />
      <Scene startFrame={8280} durationFrames={375} tone="warm"
        clips={[{ src: 'testimonials/member-3.png', inFrame: 0, durationFrames: 375 }]}
        caption="KEVIN M. · 5'8 · PUERTO RICO · THE EMPIRE" emphasis />
      <Scene startFrame={8655} durationFrames={375} tone="warm"
        clips={[{ src: 'testimonials/member-4.png', inFrame: 0, durationFrames: 375 }]}
        caption="RAFAEL G. · 5'5 · SAN ANTONIO · THE EMPIRE" emphasis />

      {/* S9 — Offer card */}
      <TitleCard
        startFrame={9030}
        durationFrames={600}
        title="The Empire"
        sub="$997 · 3 months · ~$332/mo · Affirm or Afterpay · Limited to 5 clients"
        background={{ src: 'lifestyle/transformation.mp4', inFrame: 0, durationFrames: 600 }}
      />

      {/* S10 — True cost (callback) */}
      <Scene
        startFrame={9630}
        durationFrames={450}
        tone="cool"
        clips={[
          { src: 'lifestyle/insecure-men.mp4', inFrame: 0, durationFrames: 225 },
          { src: 'gallery/lack of attraction copy.mp4', inFrame: 225, durationFrames: 225 },
        ]}
        caption="A thousand dollars doesn't build the Empire. The decision does."
      />

      {/* S11 — Close */}
      <Scene
        startFrame={10080}
        durationFrames={300}
        tone="warm"
        clips={[
          { src: 'lifestyle/inspire.mp4', inFrame: 0, durationFrames: 150 },
          { src: 'throne-room/hero-video.mp4', inFrame: 150, durationFrames: 150 },
        ]}
        caption="Short Kings · Work with Axel · Five seats." emphasis
      />
      <TitleCard startFrame={10380} durationFrames={150} title="Apply for The Empire" sub="shortkings — 2-min assessment" />
    </AbsoluteFill>
  );
};

export const ShortKingsEmpire: React.FC = () => <Composition />;

// Vertical share the same logic — Remotion crops to the comp's width/height; flex layout reflows.
export const ShortKingsEmpireVert: React.FC = () => <Composition />;
