<script lang="ts">
	import { cn } from "../../../internal/util/cn";
	import type { Snippet } from "svelte";

	let {
		separator = "lucide:chevron-right",
		class: className,
		children,
	}: {
		separator?: string;
		class?: string;
		children: Snippet;
	} = $props();
</script>

<nav data-slot="breadcrumb" class={cn("flex", className)}>
	{@render children?.()}
</nav>
