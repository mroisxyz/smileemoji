import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// hello: a tiny feel-good submission for the One Emoji, One Smile bounty.
const here = fileURLToPath(new URL('.', import.meta.url));

// batch: keep it self-contained in our own directory, reading nothing external.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetDir = path.isAbsolute(outputDir) ? outputDir : path.resolve(here, outputDir);

// orders: make the destination recursively, then write exactly one emoji and stop.
const emoji = '\u{1F979}';
const payload = Buffer.from(emoji, 'utf8');

await mkdir(targetDir, { recursive: true });
await writeFile(path.join(targetDir, 'entry.txt'), payload);

// thinking (revised): the kindest, most tender pick is 🥹 — joy welling up, held back.
// bar: log the byte size once; nothing else goes to stdout.
console.log(payload.length);
