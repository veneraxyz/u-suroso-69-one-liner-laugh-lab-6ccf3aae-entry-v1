import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a robot vacuum's excuse after eating a sock.
const LINE: string =
  "In my defense, the sock started it \u2014 it was lying there all soft and linty, so I did what any vacuum would do: I ate the evidence.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const line: string = LINE.trim();
if (line.length === 0) {
  throw new Error("entry line must not be empty or only whitespace");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line must be a single line");
}
if (line.length > 200) {
  throw new Error(
    `entry line must be at most 200 characters, got ${line.length}`,
  );
}

writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
