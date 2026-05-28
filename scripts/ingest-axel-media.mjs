#!/usr/bin/env node
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repo = path.join(__dirname, "..");
const tmp = "/tmp/axel-ingest";

const jobs = [
  ["https://www.instagram.com/p/DYX8KErxIS4/", "public/media/dating/pedestal"],
  ["https://www.instagram.com/p/DYxaUiKR7Fx/", "public/media/dating/be-unpredictable"],
  ["https://www.instagram.com/p/DOe4WcnEd4m/", "public/media/dating/dating-slot-6"],
  ["https://www.instagram.com/p/DSoR3CikS4_/", "public/media/lifestyle/lifestyle-slot-1"],
  ["https://www.instagram.com/p/DYp14-wRbkK/", "public/media/lifestyle/lifestyle-slot-2"],
  ["https://www.instagram.com/p/DYqflUrRVHT/", "public/media/lifestyle/lifestyle-slot-3"],
  ["https://www.instagram.com/p/DXc4xcZEeQx/", "public/media/lifestyle/lifestyle-slot-4"],
  ["https://www.instagram.com/p/DEVxznTRtsw/", "public/media/lifestyle/lifestyle-slot-5"],
  ["https://www.instagram.com/p/DWpzGgkkUNO/", "public/media/lifestyle/lifestyle-slot-6"],
  ["https://www.instagram.com/p/DYXs7vDRQ7p/", "public/media/gym/gym-slot-1"],
  ["https://www.instagram.com/p/DDsGVzURiDQ/", "public/media/gym/gym-slot-2"],
  ["https://www.instagram.com/reel/DEgExEfR86Y/", "public/media/gym/gym-slot-4"],
  ["https://www.instagram.com/reel/DKKeTqOxTFC/", "public/media/gym/gym-slot-6"],
  ["https://www.instagram.com/reel/DFluYRzxJR8/", "public/media/throne-room/style-slot-1"],
  ["https://www.instagram.com/reel/DGgoDN4RWwn/", "public/media/throne-room/style-slot-2"],
  ["https://www.instagram.com/reel/DLBXT4PRNbL/", "public/media/throne-room/style-slot-4"],
  ["https://www.instagram.com/reel/DOhCsONEeS6/", "public/media/throne-room/style-slot-6"],
];

fs.mkdirSync(tmp, { recursive: true });

function dl(url, outBase) {
  const out = path.join(tmp, path.basename(outBase) + ".%(ext)s");
  for (const fmt of ["2", "b", "bv*+ba/b"]) {
    const r = spawnSync(
      "yt-dlp",
      ["-f", fmt, "-o", out, url],
      { encoding: "utf8", timeout: 120000 }
    );
    if (r.status === 0) {
      const files = fs.readdirSync(tmp).filter((f) => f.startsWith(path.basename(outBase)));
      if (files.length) {
        const src = path.join(tmp, files[0]);
        const ext = path.extname(files[0]) || ".mp4";
        const dest = path.join(repo, outBase + ext);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(src, dest);
        return { ok: true, dest };
      }
    }
  }
  return { ok: false, url };
}

const results = [];
for (const [url, outBase] of jobs) {
  results.push({ outBase, ...dl(url, outBase) });
}

console.log(JSON.stringify(results, null, 2));
