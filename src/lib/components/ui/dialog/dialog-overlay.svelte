<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";

	let { ...restProps }: DialogPrimitive.OverlayProps = $props();
</script>

<DialogPrimitive.Overlay
	data-slot="dialog-overlay"
	class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0"
	{...restProps}
/>
