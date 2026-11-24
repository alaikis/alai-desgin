<script lang="ts">
	let { class: className, children, ...props }: {
		class?: string;
		children?: any;
	} = $props();
</script>

<div
	class={["rounded-lg border border-border bg-card text-card-foreground", className].join(" ")}
	{...props}
>
	{@render children?.()}
</div>
