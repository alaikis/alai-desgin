<script lang="ts">
	let { class: className, children, ...props }: {
		class?: string;
		children?: any;
	} = $props();
</script>

<p
	class={["text-sm text-muted-foreground", className].join(" ")}
	{...props}
>
	{@render children?.()}
</p>
