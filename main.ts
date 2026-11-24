// Weirdest Job Title: Blind Judge Showdown — make.fun entry.
//
// The program outputs exactly one job title to entry.txt and nothing else:
// a real-sounding job with one hilariously specific twist.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Director of Reheating Fish in the Office Microwave";

// The gate accepts 1-60 characters; fail loudly if the title ever breaks it,
// so a bad title never silently ships as an invalid entry.
if (TITLE.length < 1 || TITLE.length > 60) {
  throw new Error(
    `job title must be 1-60 characters, got ${TITLE.length}: ${JSON.stringify(TITLE)}`,
  );
}
if (TITLE.trim() !== TITLE || TITLE.trim().length === 0) {
  throw new Error("job title must not be blank or padded with whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");
