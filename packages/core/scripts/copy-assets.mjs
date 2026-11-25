import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// 将 Svelte 源的设计 token 与原子类 CSS 产物复制到核心包 dist，
// 保证 Web Components 消费端与 Svelte 包视觉来源单一。
const root = path.resolve(__dirname, '..', '..', '..');
const dist = path.resolve(__dirname, '..', 'dist');
const srcDir = path.resolve(__dirname, '..', 'src');
fs.mkdirSync(dist, { recursive: true });
for (const name of ['tokens.css', 'styles.css']) {
  fs.copyFileSync(path.join(root, 'src', name), path.join(dist, name));
}
console.log('[copy-assets] copied tokens.css + styles.css to dist/');

// 重写 dist 中 .js/.d.ts 的中文注释，确保 dist 始终为干净 UTF-8。
// tsc 在 Windows 管道下可能把源文件中文注释写为 mojibake（GBK/UTF-8 混读）；
// 此处用源文件 src/ 下同名模块的注释覆盖 dist 中对应的注释行。
function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(js|d\.ts)$/.test(entry.name)) out.push(full);
  }
  return out;
}

// 提取源文件开头连续的注释行（// 或 /* */）
function extractHeaderComments(tsPath) {
  const lines = fs.readFileSync(tsPath, 'utf8').split('\n');
  const out = [];
  let started = false;
  for (const line of lines) {
    if (line.startsWith('//') || line.startsWith('/*') || line.startsWith(' *') || line.startsWith('*')) {
      out.push(line);
      started = true;
      continue;
    }
    if (started) break; // 注释块结束
    if (line.trim() !== '') break;
  }
  return out;
}

let fixed = 0;
for (const distFile of walk(dist)) {
  // dist/components/button/button.js → src/components/button/button.ts
  const rel = path.relative(dist, distFile).replace(/\\/g, '/');
  const base = rel.replace(/\.js$/, '.ts').replace(/\.d\.ts$/, '.ts');
  const srcFile = path.join(srcDir, base);
  if (!fs.existsSync(srcFile)) continue;
  const header = extractHeaderComments(srcFile);
  if (!header.length) continue;
  const lines = fs.readFileSync(distFile, 'utf8').split('\n');
  const distHeader = [];
  let i = 0;
  while (i < lines.length && (lines[i].startsWith('//') || lines[i].startsWith('/*') || lines[i].startsWith(' *') || lines[i].startsWith('*'))) {
    distHeader.push(lines[i]);
    i++;
  }
  if (distHeader.length && JSON.stringify(distHeader) !== JSON.stringify(header)) {
    const newContent = header.concat(lines.slice(i)).join('\n');
    fs.writeFileSync(distFile, newContent, 'utf8');
    fixed++;
  }
}
console.log(`[copy-assets] comment re-sync: ${fixed} files`);
