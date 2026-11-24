<script lang="ts">
  import Skeleton from "./skeleton.svelte";
</script>

<div class="border border-border rounded-xl p-6 space-y-4">
  <div class="flex items-center justify-between">
    <Skeleton class="h-4 w-24" />
    <Skeleton class="h-8 w-8 rounded-xl" />
  </div>
  <Skeleton class="h-8 w-16" />
  <Skeleton class="h-3 w-32" />
</div>
