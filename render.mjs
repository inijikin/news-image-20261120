// Renders render.html to entry.png (1024x1024) with headless Chromium.
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { statSync } from "node:fs";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("/tmp/pw-render/node_modules/playwright-core");

const repoDir = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(repoDir, "render.html");
const outPath = join(repoDir, "entry.png");
const chromeBin =
  process.env.HOME + "/.cache/ms-playwright/chromium-1254/chrome-linux64/chrome";

const browser = await chromium.launch({
  executablePath: chromeBin,
  args: ["--no-sandbox", "--force-device-scale-factor=1"],
});
const page = await browser.newPage({
  viewport: { width: 1024, height: 1024 },
  deviceScaleFactor: 1,
});
await page.goto("file://" + htmlPath, { waitUntil: "load" });
await page.screenshot({ path: outPath });
await browser.close();

const size = statSync(outPath).size;
console.log("wrote", outPath, size, "bytes");
if (size > 1024 * 1024) {
  console.error("ERROR: entry.png over 1 MiB");
  process.exit(1);
}
