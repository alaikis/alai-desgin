<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";
	import XIcon from "@lucide/svelte/icons/x";
	import { cn, type WithoutChildrenOrChild } from "../../../internal/util/cn";
	import type { ComponentProps } from "svelte";
	import DialogPortal from "./dialog-portal.svelte";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithoutChildrenOrChild<DialogPrimitive.ContentProps> & {
		portalProps?: WithoutChildrenOrChild<ComponentProps<typeof DialogPortal>>;
		children: import("svelte").Snippet;
	} = $props();
</script>

<DialogPortal {...restProps.portalProps}>
	<DialogPrimitive.Content
		bind:ref
		data-slot="dialog-content"
		class={cn(
			"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-card p-6 shadow duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%] data-[open]:slide-in-from-left-1/2 data-[open]:slide-in-from-top-[48%] sm:rounded-lg",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
		<DialogPrimitive.Close
			class="ring-offset-background focus-visible:ring-ring absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none"
		>
			<XIcon class="size-4" />
			<span class="sr-only">Close</span>
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</DialogPortal>
