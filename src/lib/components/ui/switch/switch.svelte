<script lang="ts">
	import { Toggle as TogglePrimitive } from "bits-ui";
	import { cn } from "../../../internal/util/cn";

	interface Props {
		checked?: boolean;
		onCheckedChange?: (checked: boolean) => void;
		disabled?: boolean;
		class?: string;
		id?: string;
		name?: string;
		"aria-label"?: string;
		"aria-labelledby"?: string;
		"aria-describedby"?: string;
	}

	let {
		checked = $bindable(false),
		onCheckedChange,
		disabled,
		class: className,
		...restProps
	}: Props = $props();

	function handlePressedChange(pressed: boolean) {
		checked = pressed;
		onCheckedChange?.(pressed);
	}
</script>

<TogglePrimitive.Root
	pressed={checked}
	onPressedChange={handlePressedChange}
	{disabled}
	{...restProps}
	class={cn(
		"peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-all duration-200",
		"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
		"disabled:cursor-not-allowed disabled:opacity-50",
		"data-[state=on]:bg-primary data-[state=off]:bg-input",
		className
	)}
>
	<span
		class={cn(
			"pointer-events-none block h-4 w-4 rounded-full bg-background shadow ring-0 transition-transform duration-200",
			checked ? "translate-x-4" : "translate-x-0"
		)}
	></span>
</TogglePrimitive.Root>
