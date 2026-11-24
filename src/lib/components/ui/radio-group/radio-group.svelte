<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import { cn } from "../../../internal/util/cn";

	let {
		value = $bindable(undefined),
		onValueChange,
		disabled,
		class: className,
		children,
		...restProps
	}: {
		value?: string;
		onValueChange?: (value: string) => void;
		disabled?: boolean;
		class?: string;
		children: import("svelte").Snippet;
	} = $props();
</script>

<RadioGroupPrimitive.Root
	bind:value
	{onValueChange}
	{disabled}
	class={cn("grid gap-2", className)}
	{...restProps}
>
	{@render children?.()}
</RadioGroupPrimitive.Root>
