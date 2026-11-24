<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import { cn } from "../../../internal/util/cn";
	import { Circle } from "@lucide/svelte";

	let {
		value,
		disabled,
		class: className,
		...restProps
	}: RadioGroupPrimitive.ItemProps = $props();
</script>

<RadioGroupPrimitive.Item
	{value}
	{disabled}
	{...restProps}
	class={cn(
		"aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
>
	<Circle class="h-2.5 w-2.5 fill-current text-current" />
</RadioGroupPrimitive.Item>
