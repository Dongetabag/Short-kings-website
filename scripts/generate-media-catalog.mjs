import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mediaRoot = path.join(__dirname, "..", "public", "media");
const outFile = path.join(__dirname, "..", "src", "lib", "media-catalog.json");

const SKIP_DIRS = new Set(["temp_processing"]);
const SKIP_FILES = new Set(["logo.png"]);

function walk(dir, rel = "") {
  /** @type {string[]} */
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const full = path.join(dir, ent.name);
    const r = rel ? `${rel}/${ent.name}` : ent.name;
    if (ent.isDirectory()) {
      out.push(...walk(full, r));
    } else if (/\.(mp4|mov|webm|jpg|jpeg|png|webp|gif)$/i.test(ent.name)) {
      if (SKIP_FILES.has(ent.name)) continue;
      out.push("/media/" + r.split(path.sep).join("/"));
    }
  }
  return out;
}

const urls = walk(mediaRoot).sort();
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(
  outFile,
  JSON.stringify(
    { generatedAt: new Date().toISOString(), count: urls.length, urls },
    null,
    2
  )
);
console.log("media-catalog.json:", urls.length, "assets");
