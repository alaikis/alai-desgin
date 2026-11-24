<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";

	let { open = $bindable(false), ...restProps }: DialogPrimitive.RootProps = $props();

	$effect(() => {
		if (open) {
			const main = document.querySelector<HTMLElement>("main");
			const prev = main ? main.style.overflow : "";
			document.body.classList.add("overflow-hidden");
			if (main) main.style.overflow = "hidden";
			return () => {
				document.body.classList.remove("overflow-hidden");
				if (main) main.style.overflow = prev;
			};
		}
	});
</script>

<DialogPrimitive.Root bind:open {...restProps} />
