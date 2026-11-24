<script lang="ts">
	import type { Component } from 'svelte';
	import { Button } from '../button/index';

	interface Action {
		icon: Component;
		label: string;
		variant?: 'default' | 'destructive' | 'primary' | 'success' | 'info';
		disabled?: boolean;
		onClick: () => void;
	}

	let {
		actions,
		align = 'end'
	}: {
		actions: Action[];
		align?: 'start' | 'center' | 'end';
	} = $props();

	const variantClasses: Record<string, string> = {
		default: '',
		destructive: 'text-destructive hover:text-destructive',
		primary: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
		success: 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300',
		info: 'text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300'
	};

	const alignClass: Record<string, string> = {
		start: 'justify-start',
		center: 'justify-center',
		end: 'justify-end'
	};
</script>

<div class="flex items-center {alignClass[align]} gap-1">
	{#each actions as action (action.label)}
		<Button
			variant="ghost"
			size="icon"
			class="h-8 w-8 transition-transform duration-150 hover:scale-110 active:scale-95 {variantClasses[action.variant ?? 'default']}"
			onclick={action.onClick}
			disabled={action.disabled}
			title={action.label}
		>
			<action.icon class="h-4 w-4" />
		</Button>
	{/each}
</div>
