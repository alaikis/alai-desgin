<script lang="ts">
	let { class: className, children, ...props }: {
		class?: string;
		children?: any;
	} = $props();
</script>

<div
	class={["p-6 pt-0", className].join(" ")}
	{...props}
>
	{@render children?.()}
</div>
