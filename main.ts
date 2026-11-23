import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

// Revised after local test

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });

const entryPath = `${outputDir}/entry.txt`;
const content = 'v2.3.1 — Fixed a race condition where crossing a doorway evicted the current task from working memory before intent could be flushed to disk.';
writeFileSync(entryPath, content, { encoding: 'utf8', flag: 'w' });