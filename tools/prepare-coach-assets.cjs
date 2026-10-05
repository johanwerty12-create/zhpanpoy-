const path = require('node:path');
const sharp = require(process.env.CRAFT_SHARP || 'sharp');
async function main() {
  const [source, name] = process.argv.slice(2);
  if (!source || !/^[a-z0-9-]+\.webp$/.test(name || '')) throw new Error('Provide a source and a workspace WebP filename.');
  const output = path.resolve(__dirname, '..', 'assets', 'lessons', name);
  await sharp(source).resize(1448, 1086, { fit: 'contain', background: '#f7f4ed' }).webp({ quality: 86 }).toFile(output);
  console.log(output);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
