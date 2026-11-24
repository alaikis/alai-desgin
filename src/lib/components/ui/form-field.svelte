<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithoutChildrenOrChild } from "../../utils";
	import type { Snippet } from "svelte";

	let {
		class: className,
		label,
		required = false,
		helperText,
		error,
		for: forAttr,
		children,
		...restProps
	}: WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>> & {
		label?: string;
		required?: boolean;
		helperText?: string;
		error?: string;
		for?: string;
		children: Snippet<[{ id: string }]>;
	} = $props();

	const autoId = $props.id();
	const fieldId = $derived(forAttr ?? autoId);
</script>

<div class={cn("space-y-1.5", className)} {...restProps}>
	{#if label}
		<label for={fieldId} class="text-sm font-medium text-foreground">
			{label}
			{#if required}<span class="text-destructive ml-0.5">*</span>{/if}
		</label>
	{/if}
	<div class="flex flex-col gap-1">
		{@render children({ id: fieldId })}
		{#if !error && helperText}
			<p class="text-xs text-muted-foreground">{helperText}</p>
		{/if}
		{#if error}
			<p class="text-xs text-destructive">{error}</p>
		{/if}
	</div>
</div>
