<script lang="ts">
	import { Dialog as SheetPrimitive } from "bits-ui";

	let { open = $bindable(false), ...restProps }: SheetPrimitive.RootProps = $props();

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

<SheetPrimitive.Root bind:open {...restProps} />
