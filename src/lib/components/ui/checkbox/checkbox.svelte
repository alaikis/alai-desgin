<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from "bits-ui";
	import { cn } from "../../../internal/util/cn";
	import CheckIcon from "@lucide/svelte/icons/check";

	let {
		checked = $bindable(false),
		onCheckedChange,
		disabled,
		class: className,
		...restProps
	}: CheckboxPrimitive.RootProps = $props();
</script>

<CheckboxPrimitive.Root
	bind:checked
	{onCheckedChange}
	{disabled}
	{...restProps}
	class={cn(
		"peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
		className
	)}
>
	<CheckIcon class="h-4 w-4" />
</CheckboxPrimitive.Root>
