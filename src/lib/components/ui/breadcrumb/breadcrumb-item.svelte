<script lang="ts">
	import { cn } from "../../../internal/util/cn";
	import type { Snippet } from "svelte";

	let {
		href,
		class: className,
		children,
	}: {
		href?: string;
		class?: string;
		children: Snippet;
	} = $props();
</script>

{#if href}
	<a
		href={href}
		data-slot="breadcrumb-item"
		class={cn("text-muted-foreground hover:text-foreground transition-colors", className)}
	>
		{@render children?.()}
	</a>
{:else}
	<span
		data-slot="breadcrumb-item"
		role="link"
		aria-current="page"
		class={cn("text-foreground font-medium", className)}
	>
		{@render children?.()}
	</span>
{/if}
