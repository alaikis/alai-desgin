<script lang="ts">
	import { cn, type WithElementRef } from "../../../internal/util/cn";
	import type { HTMLTextareaAttributes } from "svelte/elements";

	type TextareaType = WithElementRef<HTMLTextareaAttributes> & {
		value?: string;
	};

	let {
		ref = $bindable(null),
		value = $bindable(""),
		class: className,
		...restProps
	}: TextareaType = $props();
</script>

<textarea
	bind:this={ref}
	bind:value
	data-slot="textarea"
	class={cn(
		"flex min-h-[60px] w-full rounded-lg border border-border bg-card px-3 py-2 text-sm transition-all duration-200",
		"placeholder:text-muted-foreground/70",
		"focus:border-info focus:ring-2 focus:ring-info/20 focus:outline-none",
		"disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	{...restProps}
></textarea>
