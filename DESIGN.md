---
design_system: AlaiDesign
base: TDesign (Tencent)
high_energy: true
# machine-readable 设计 token（值引自 src/tokens.css 的 --* token；改 token 时需同步此处）
colors:
  primary: "#0052D9"          # TDesign brand blue（CTA/链接/focus）
  primary-active: "#002C7A"  # 高能量：CTA 按下/active 更深
  primary-tint: "#E8F1FF"    # 高能量：8-12% 选中态 tint
  primary-foreground: "#FFFFFF"
  background: "#F3F3F3"      # TDesign page bg gray
  background-secondary: "#F7F7F7"
  card: "#FFFFFF"
  foreground: "#1F2329"
  destructive: "#E5484D"
  success: "#00A86B"
  warning: "#F5A623"
  border: "#DCDEE3"
  surface-emphasis: "#F0F6FF"  # 高能量：卡片强调面
  stat-highlight: "#E8F1FF"    # 高能量：统计卡高亮
typography:
  display: { fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }
  title:   { fontSize: "20px", fontWeight: 600 }
  body:    { fontSize: "14px", fontWeight: 400, lineHeight: 1.6 }
  caption: { fontSize: "12px", fontWeight: 400 }
  label:   { fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" }
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  base: "8px"
  page: "2rem"
  section: "1.5rem"
  card: "1.5rem"
  content-gap: "1rem"
  dense-page: "1.25rem"   # 高能量：数据密集场景紧凑节奏
  dense-card: "1rem"
  dense-gap: "0.5rem"
  control-height-dense: "32px"
elevation:
  xs: "0 1px 2px rgba(0,0,0,0.03)"
  sm: "0 1px 3px rgba(0,0,0,0.04)"
  md: "0 1px 4px rgba(0,0,0,0.05)"
  lg: "0 2px 12px rgba(0,0,0,0.07)"
  panel: "0 4px 16px rgba(0,0,0,0.08)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
    hover: { backgroundColor: "{colors.primary-active}" }
    active: { backgroundColor: "#00204f" }
    disabled: { opacity: 0.5 }
  card:
    backgroundColor: "{colors.card}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
    elevation: "{elevation.sm}"
    hover: { elevation: "{elevation.md}" }
  table:
    rowHeight: "48px"
    denseRowHeight: "40px"
    headerBg: "{colors.background-secondary}"
    border: "1px solid {colors.border}"
    cellPadding: "0.5rem 0.75rem"
---

# AlaiDesign 设计系统

## Overview

AlaiDesign 基于 **TDesign（腾讯开源企业级 UI）** 设计语言，面向 Zymeup 物流 SaaS 中后台。在 TDesign 中性骨架（brand blue #0052D9 + layered neutral grays + 1px hairline + 8px 节奏）之上，叠加**高能量强化**（中性骨架 + 加强强调/对比/密度），让数据密集的企业中后台既有 TDesign 的克制专业，又具备视觉冲击力。

**目标受众**：物流商户/承运商/管理员——数据密集的中后台操作场景（运单、EPOD、ECMR、CPSC、合规、财务）。

**调性**：TDesign 企业中后台（专业、克制、密度高）+ 高能量（CTA 对比鲜明、数据密度紧凑、hover/active/selected 态强烈）。

## Colors

色板遵循 60/30/10 分布：base/background 60%（中性灰 `--background`/`--background-secondary`），surface/supporting 30%（card 白 + `--surface-emphasis` 高亮面），accent/interactive 10%（brand blue #0052D9 + 状态色）。

| 角色 | Token | 值（light） | 用法 |
|------|-------|------------|------|
| 品牌 CTA | `--primary` | `#0052D9` | 主按钮/链接/focus |
| CTA 按下 | `--primary-active` | `#002C7A` | active 态更深（高能量对比） |
| 选中态 | `--primary-selected` | `rgba(0,82,217,0.08)` | 8% tint 选中（tab/行选中） |
| 强调面 | `--surface-emphasis` | `#F0F6FF` | 高亮卡片/重点区块（高能量视觉层级） |
| 统计高亮 | `--stat-highlight` | `#E8F1FF` | 统计卡高亮底 |
| 危险 | `--destructive` | `#E5484D` | 删除/错误 |
| 成功 | `--success` | `#00A86B` | 成功状态 |
| 警告 | `--warning` | `#F5A623` | 警告状态 |
| 边框 | `--border` | `#DCDEE3` | 1px hairline 优先 |

**视觉角色纪律**：brand 色只用于 CTA/链接/选中/高亮，不滥用于正文；状态色（success/warning/destructive）专用于结果与风险表达，不混用；高亮面（surface-emphasis/stat-highlight）用于视觉层级，非装饰。

## Typography

字体层级（TDesign 系统字体栈）：

| 层级 | Token | 规格 | 用法 |
|------|-------|------|------|
| display | `--font-display` | 32px/700/-0.02em | 页面大标题 |
| title | `--font-title` | 20px/600 | 卡片/区块标题 |
| body | `--font-body` | 14px/400/1.6 | 正文 |
| caption | `--font-caption` | 12px/400 | 辅助说明 |
| label | `--font-label` | 11px/600/0.05em | 大写字母 label |

## Layout

8px 间距节奏（TDesign 几何）：`--space-page`（2rem）/ `--space-section`（1.5rem）/ `--space-card-padding`（1.5rem）/ `--space-content-gap`（1rem）。

**高能量数据密度**（`--space-dense-*`）：数据密集场景（表格/列表/统计网格）用紧凑节奏 `--space-dense-page`（1.25rem）/ `--space-dense-card`（1rem）/ `--space-dense-gap`（0.5rem）/ `--control-height-dense`（32px）。密度通过堆叠与视觉层级（scale/weight/color）表达，非距离。

栅格：12 列，`--space-content-gap` 列间距；响应式四档 320/768/1024/1440。

## Elevation

阴影层级（TDesign 轻阴影，1px 边框优先）：

| 层级 | Token | 值 | 用法 |
|------|-------|-----|------|
| xs | `--shadow-xs` | 0 1px 2px 3% | 卡片默认 |
| sm | `--shadow-sm` | 0 1px 3px 4% | 卡片 hover |
| md | `--shadow-md` | 0 1px 4px 5% | 抬起面板 |
| lg | `--shadow-lg` | 0 2px 12px 7% | 弹窗 |
| panel | `--shadow-panel` | 0 4px 16px 8% | 下拉/抽屉 |

**1px hairline 优先**：边框用 `--border`（1px `--border-width`），阴影克制（低透明度），不堆叠重阴影。

## Shapes

圆角收敛（TDesign 4/6/8/12px）：

| Token | 值 | 用法 |
|-------|-----|------|
| `--radius-sm` | 4px | 小徽章/标签 |
| `--radius-md` | 6px | 按钮/输入框 |
| `--radius-lg` | 8px | 卡片 |
| `--radius-xl` | 12px | 大面板/弹窗 |
| `--radius-full` | 9999px | 圆点/胶囊 |

## Components

组件原子视觉（值引 token，状态从 base 派生，禁临场造值）：

- **Button**：primary（`--primary` bg / `--primary-foreground` text / `--radius-md` / 0.5rem 1rem padding），hover→`--primary-active`，active→更深，disabled→opacity 0.5。focus→`--focus-ring`（2px ring）。
- **Card**：`--card` bg / 1px `--border` / `--radius-lg` / `--shadow-sm`，hover→`--shadow-md`。强调面用 `--surface-emphasis`。
- **Table**：行高 48px（dense 40px），表头 `--background-secondary` 底，1px 边框，单元格 0.5rem 0.75rem padding。
- **Form**：input 1px `--border` / `--radius-md` / focus→`--focus-ring` + `--border-active`。
- **四态**：loading→skeleton-card/table/page（shimmer 动效）；empty→empty-state（图标 + 文案 + 空态高度）；error→error-state（错误占位 + 重试 CTA）；forbidden→error-state 403 变体（无重试 CTA + 权限说明）。

## Do's & Don'ts

**Do**：
- 色值/间距/圆角/阴影一律 `var(--*)` token，不硬编码 `#hex`/裸 `px`
- 状态变体从 base token 派生（hover→`--primary-active`、selected→`--primary-selected`），禁临场造值
- 数据密集场景用 `--space-dense-*` 紧凑节奏
- 高亮/重点用 `--surface-emphasis`/`--stat-highlight`（视觉层级，非装饰）
- 四态用统一组件（skeleton/empty/error/forbidden）

**Don't**：
- 不滥用 brand 色（只用于 CTA/链接/选中/高亮）
- 不堆叠重阴影（1px 边框优先，阴影克制）
- 不为"活泼"改 duration/ease（动效 0.3-0.5s ease-out，固定 token）
- 不为压缩页面压行高（body 1.6 行高是底线）
- 不新建组件绕过四态规范（forbidden 复用 error-state 变体）

**焦点态**：键盘焦点 `--focus-ring`（2px `--ring` ring），不省略。
**响应式**：320（移动）/ 768（平板）/ 1024（桌面）/ 1440（大屏）四档，touch target ≥ 44px。
**token fallback**：找不到 token 时用最近 base token，不临场造新值；确需新值走"高能量派生 token"流程（加进 tokens.css 三处同步）。
