import { mkdirSync, writeFileSync } from "node:fs";

// One line, 134 characters: a cron job that fired every minute since March resigns.
const line =
  "I have fired every minute since March without a thank-you, so consider this my notice: I stopped firing yesterday, and nobody noticed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log(line);
