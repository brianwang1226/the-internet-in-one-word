import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Internet in One Word: the whole internet, in a single word.
// "enshittification" — the slow decay of every platform you loved into
// ads, fees and slop. Funny on its own, true of the internet as a whole,
// surprising, and it lands in one beat.
const word = "enshittification";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word + "\n", "utf8");
