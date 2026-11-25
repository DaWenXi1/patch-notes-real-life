import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const note =
  "v4.1.2: fixed a bug where the brain replayed an awkward conversation at 3 a.m. in 4K with surround sound.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), note, "utf8");
