<script lang="ts">
	import Skeleton from './skeleton/skeleton.svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();
</script>

<div class="space-y-6 {className}">
	<div class="flex items-center justify-between">
		<div class="space-y-2">
			<Skeleton class="h-6 w-48" />
			<Skeleton class="h-4 w-32" />
		</div>
		<Skeleton class="h-9 w-28" />
	</div>
	<div class="space-y-2">
		<Skeleton class="h-8 w-full" />
		<Skeleton class="h-8 w-full" />
		<Skeleton class="h-8 w-full" />
		<Skeleton class="h-8 w-full" />
		<Skeleton class="h-8 w-full" />
	</div>
</div>