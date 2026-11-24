<script lang="ts">
	let { class: className, children, ...props }: {
		class?: string;
		children?: any;
	} = $props();
</script>

<h3
	class={["text-base font-semibold leading-none tracking-tight", className].join(" ")}
	{...props}
>
	{@render children?.()}
</h3>
