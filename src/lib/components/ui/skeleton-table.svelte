<script lang="ts">
	import Skeleton from './skeleton/skeleton.svelte';

	interface Props {
		rows?: number;
		cols?: number;
		class?: string;
	}

	let { rows = 5, cols = 6, class: className }: Props = $props();
</script>

<div class="space-y-3 {className}">
	{#each Array(rows) as _, ri}
		<div class="flex gap-3 items-center">
			{#each Array(cols) as _, ci}
				<Skeleton class="h-5 {ci === 0 ? 'w-1/5' : ci === 1 ? 'w-2/5' : 'w-1/6'}" />
			{/each}
		</div>
	{/each}
</div>