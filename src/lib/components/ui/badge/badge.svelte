<script lang="ts">
	let { class: className, children, variant = "default", ...props }: {
		class?: string;
		children?: any;
		variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
	} = $props();
</script>

<span
	class={["inline-flex items-center rounded-[4px] border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
		variant === "default" && "bg-primary text-primary-foreground border-primary",
		variant === "secondary" && "bg-secondary text-secondary-foreground border-secondary",
		variant === "destructive" && "bg-destructive text-destructive-foreground border-destructive",
		variant === "outline" && "bg-background text-foreground border-input",
		variant === "success" && "bg-success text-success-foreground border-success",
		variant === "warning" && "bg-warning text-warning-foreground border-warning",
		className
	].join(" ")}
	role="status"
	{...props}
>
	{@render children?.()}
</span>
