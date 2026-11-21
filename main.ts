// Brave rank-fix entry: "The Kettle Takes Its Time" is replaced by a quieter
// image — an old hound waiting out a slow evening on the porch.
// I keep the text as plain sentence strings so each line stays readable
// and easy to tweak, then join them with single spaces for the final entry.
const sentences: string[] = [
  "An old hound sits on the porch, ears folded, eyes half‑closed as the sky drifts from gray to amber.",
  "A soft wind rolls over the porch rail, stirring dry leaves that settle like quiet thoughts.",
  "A single firefly pauses on the hound’s nose, blinking before it fades.",
];

const text: string = sentences.join(" ");

// The bounty caps entries at 280 characters, and an empty entry would be
// meaningless — so refuse to write anything outside 1–280 chars.
if (text.length < 1 || text.length > 280) {
  throw new Error(`Entry must be 1-280 characters, got ${text.length}`);
}

const fs = require("node:fs");
const path = require("node:path");

const outDir: string = "/output";
const outFile: string = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, text, "utf8");

console.log(`Wrote ${text.length} characters to ${outFile}`);
