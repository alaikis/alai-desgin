import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
// 测试文件在 AlaiDesign/src/__tests__/，组件在 AlaiDesign/src/lib/components/ui/，仓根 = AlaiDesign/
const uiDir = resolve(here, '../lib/components/ui');
const rootDir = resolve(here, '../..'); // AlaiDesign 仓根

function readComponent(rel: string): string {
  return readFileSync(resolve(uiDir, rel), 'utf8');
}

describe('AlaiDesign 组件 token 消费一致性', () => {
  it('card 组件用 Tailwind token 类（bg-card/border）', () => {
    const src = readComponent('card/card.svelte');
    expect(src).toContain('bg-card');
    expect(src).toContain('border');
  });

  it('四态组件存在（skeleton/empty/error）', () => {
    expect(readComponent('skeleton/skeleton.svelte').length).toBeGreaterThan(0);
    expect(readComponent('empty-state.svelte').length).toBeGreaterThan(0);
    expect(readComponent('error-state.svelte').length).toBeGreaterThan(0);
  });

  it('button 组件含 cn util import（自包含）', () => {
    const src = readComponent('button/button.svelte');
    expect(src.length).toBeGreaterThan(0);
    expect(src).toMatch(/cn/);
  });
});

describe('AlaiDesign tokens.css 高能量 token', () => {
  it('tokens.css 含 TDesign 中性骨架 + 高能量派生 token', () => {
    const css = readFileSync(resolve(rootDir, 'src/tokens.css'), 'utf8');
    expect(css).toContain('--primary: #0052D9');
    expect(css).toContain('--background: #F3F3F3');
    expect(css).toContain('--border-width: 1px');
    expect(css).toContain('--primary-active');
    expect(css).toContain('--space-dense-page');
    expect(css).toContain('--surface-emphasis');
    expect(css).toContain('--primary-selected');
    expect(css).toContain('.dark');
  });

  it('tokens.css 高能量 token 三处同步（:root + .dark）', () => {
    const css = readFileSync(resolve(rootDir, 'src/tokens.css'), 'utf8');
    const rootMatch = (css.match(/--space-dense-page/g) ?? []).length;
    expect(rootMatch).toBeGreaterThanOrEqual(2); // :root + .dark 各 1
  });
});
