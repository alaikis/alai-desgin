<script lang="ts">
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from "svelte/elements";
	import { cn, type WithElementRef } from "../../../internal/util/cn";

	type InputType = Exclude<HTMLInputTypeAttribute, "file">;

	type Props = WithElementRef<
		Omit<HTMLInputAttributes, "type"> &
			({ type: "file"; files?: FileList } | { type?: InputType; files?: undefined })
	>;

	let {
		ref = $bindable(null),
		value = $bindable(),
		type,
		files = $bindable(),
		class: className,
		"data-slot": dataSlot = "input",
		...restProps
	}: Props = $props();
</script>

{#if type === "file"}
	<input
		bind:this={ref}
		data-slot={dataSlot}
		class={cn(
			"h-9 rounded-md border border-border bg-card px-3 py-1.5 text-sm transition-all duration-200",
			"placeholder:text-muted-foreground/70",
			"focus:border-info focus:ring-2 focus:ring-info/20 focus:outline-none",
			"disabled:bg-muted disabled:cursor-not-allowed disabled:opacity-60",
			"aria-invalid:border-destructive aria-invalid:ring-destructive/20",
			className
		)}
		type="file"
		bind:files
		bind:value
		{...restProps}
	/>
{:else}
	<input
		bind:this={ref}
		data-slot={dataSlot}
		class={cn(
			"h-9 rounded-md border border-border bg-card px-3 py-1.5 text-sm transition-all duration-200",
			"placeholder:text-muted-foreground/70",
			"focus:border-info focus:ring-2 focus:ring-info/20 focus:outline-none",
			"disabled:bg-muted disabled:cursor-not-allowed disabled:opacity-60",
			"aria-invalid:border-destructive aria-invalid:ring-destructive/20",
			className
		)}
		{type}
		bind:value
		{...restProps}
	/>
{/if}
