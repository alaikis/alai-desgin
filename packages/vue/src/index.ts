import { defineCustomElement } from 'vue';
import type { ComponentOptions } from 'vue';

// Vue wrapper 基础：将 AlaiDesign Web Components 包装为 Vue 组件。
// 使用 Vue 3.3+ 原生 Custom Elements 支持（isCustomElement + onXxx 事件）。
// 每个 wrapper 组件 = 自定义元素 + props/emits 声明 + defineCustomElement 注册。

export interface AluComponentProps {
  class?: string;
  [key: string]: unknown;
}

// 通用事件映射：Web Components CustomEvent 名 → Vue emits 名（onXxx → xxx）
export function emitName(event: string): string {
  return event;
}

// 包装单个自定义元素为 Vue 组件（运行时注册，消费端无需逐组件 import）
export function aluElement(tag: string, props?: Record<string, unknown>): ComponentOptions {
  const component = {
    name: tag.replace('alu-', 'Alu').replace(/(^|-)(\w)/g, (m: string, _p: string, c: string) => c.toUpperCase()),
    props: {
      class: { type: String, default: undefined },
      ...props,
    },
    emits: ['click', 'change', 'input', 'open', 'close', 'select', 'tab-change', 'page-change', 'sort', 'row-click', 'value-change', 'search', 'retry', 'action', 'secondary-action', 'previous', 'next', 'show', 'hide', 'dismiss', 'reset', 'tab-click', 'checkbox-change', 'switch-change', 'date-change'],
    inheritAttrs: true,
    render(this: { $attrs: Record<string, unknown>; $createElement: (tag: string, props: Record<string, unknown>, children?: unknown) => unknown; $slots: Record<string, (() => unknown) | undefined>; } ) {
      const attrs: Record<string, unknown> = { ...this.$attrs };
      const props: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(attrs)) {
        if (k.startsWith('on')) continue;
        props[k] = v;
      }
      const children = this.$slots.default ? this.$slots.default() : undefined;
      return this.$createElement(tag, props, children);
    },
  };
  // 注册为自定义元素（Vue 3.3+ 支持）
  const el = defineCustomElement(component as unknown as Parameters<typeof defineCustomElement>[0]);
  if (typeof window !== 'undefined' && !customElements.get(tag)) {
    customElements.define(tag, el as unknown as CustomElementConstructor);
  }
  return component;
}

// 便捷：批量导出 wrapper 组件名（供官网代码 tab 展示）
export const ALU_VUE_COMPONENTS: Record<string, string> = {
  'alu-button': 'AluButton',
  'alu-card': 'AluCard',
  'alu-badge': 'AluBadge',
  'alu-input': 'AluInput',
  'alu-checkbox': 'AluCheckbox',
  'alu-tabs': 'AluTabs',
  'alu-skeleton': 'AluSkeleton',
  'alu-tooltip': 'AluTooltip',
  'alu-dialog': 'AluDialog',
  'alu-data-table': 'AluDataTable',
};

export default aluElement;
