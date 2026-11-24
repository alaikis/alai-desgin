<script lang="ts">
	let { class: className, children, ...props }: {
		class?: string;
		children?: any;
	} = $props();
</script>

<div
	class={["flex flex-col space-y-1.5 p-6", className].join(" ")}
	{...props}
>
	{@render children?.()}
</div>
