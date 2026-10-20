const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('src/data').filter(f => f.endsWith('.ts'));
const missingAssets = [];
const foundAssets = [];

for (const file of files) {
  const content = fs.readFileSync(path.join('src/data', file), 'utf8');
  const matches = content.match(/['"](\/[^'"]+\.(?:png|jpg|jpeg|svg|webp|pdf))['"]/g) || [];
  for (const m of matches) {
    const rawPath = m.slice(1, -1);
    const diskPath = path.join('public', rawPath.startsWith('/') ? rawPath.slice(1) : rawPath);
    if (!fs.existsSync(diskPath)) {
      missingAssets.push({ file, asset: rawPath, diskPath });
    } else {
      foundAssets.push({ file, asset: rawPath });
    }
  }
}

console.log('Found valid assets:', foundAssets.length);
if (missingAssets.length === 0) {
  console.log('SUCCESS: All referenced assets exist in public/ directory!');
} else {
  console.log('MISSING ASSETS (' + missingAssets.length + '):');
  for (const ma of missingAssets) console.log('  in ' + ma.file + ': ' + ma.asset);
}
