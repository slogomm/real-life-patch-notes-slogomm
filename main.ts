import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const entry = "v2.1.9 - Killed the nightly cron job that replays your most humiliating memory at 03:00. Scheduled shaming now respects the do-not-disturb flag.";
// Revised after local test
writeFileSync(join(outputDir, "entry.txt"), entry);