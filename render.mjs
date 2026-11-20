// Render render.html to entry.png (1024x1024) with headless Chromium.
// Uses the Chromium binary directly (no npm packages needed).
// Usage: node render.mjs [output-path, default ./entry.png]
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { homedir } from 'node:os';
import path from 'node:path';

const run = promisify(execFile);
const out = path.resolve(process.argv[2] || path.join(process.cwd(), 'entry.png'));
const html = 'file://' + path.join(process.cwd(), 'render.html');
const chrome = path.join(
  homedir(), '.cache', 'ms-playwright', 'chromium-1254', 'chrome-linux64', 'chrome'
);

await run(chrome, [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1024,1024',
  '--screenshot=' + out,
  html,
]);
console.log('wrote', out);
