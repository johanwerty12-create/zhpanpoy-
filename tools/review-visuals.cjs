// Diagnostic contact sheet; no production assets are changed.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const sharp = require(process.env.CRAFT_SHARP || 'sharp');
async function main() {
  const root = path.resolve(__dirname, '..', 'assets', 'lessons');
  const files = fs.readdirSync(root).filter(name => name.endsWith('.webp'));
  const tiles = await Promise.all(files.map(async (name, i) => ({
    input: await sharp(path.join(root, name)).resize(300, 220, { fit: 'contain', background: '#fff' })
      .extend({ bottom: 30, background: '#fff' })
      .composite([{ input: Buffer.from(`<svg width="300" height="30"><text x="5" y="22" font-size="13">${name}</text></svg>`), top: 220, left: 0 }]).png().toBuffer(),
    left: i % 4 * 300, top: Math.floor(i / 4) * 250
  })));
  const output = process.argv[2] || path.join(os.tmpdir(), 'craft-audit-images.png');
  await sharp({ create: { width: 1200, height: Math.ceil(files.length / 4) * 250, channels: 3, background: '#eee' } }).composite(tiles).png().toFile(output);
  console.log(output);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
