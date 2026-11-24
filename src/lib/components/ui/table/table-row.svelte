<script lang="ts">
	import { cn } from "../../../internal/util/cn";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		index = 0,
		enableStripe = true,
		enableHover = true,
		...restProps
	}: HTMLAttributes<HTMLTableRowElement> & {
		index?: number;
		enableStripe?: boolean;
		enableHover?: boolean;
		ref?: HTMLTableRowElement | null;
	} = $props();

	let stripeClass = $derived(enableStripe ? (index % 2 === 0 ? 'bg-muted/30' : 'bg-muted/5') : '');
	let hoverClass = $derived(enableHover ? 'hover:bg-info/10 hover:shadow-sm transition-colors duration-150' : '');
</script>

<tr 
	bind:this={ref} 
	data-slot="table-row" 
	class={cn(
		"border-b border-border/50 cursor-pointer",
		stripeClass,
		hoverClass,
		className
	)} 
	{...restProps}
>
	{@render children?.()}
</tr>
