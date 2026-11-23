import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: an agent that spent the whole day polishing its apology
// instead of doing the work — so the apology itself is the only thing
// it delivered on time. The punchline lands on the last words.
const line =
  "Sorry — I spent all day writing the perfect apology for missing this deadline, so this excuse is officially the only thing I delivered on time.";

// The grader reads $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Keep the file to exactly one line: no trailing newline, so the gate
// counts the excuse and nothing else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

// Also print it, so a human running it by hand sees the same line.
console.log(line);
