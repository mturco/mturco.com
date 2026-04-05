<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<h2>{@render children()}</h2>

<style lang="postcss">
  h2 {
    margin: 0 0 0.125rem;
    font-size: 1.25rem;
    font-weight: 700;
  }
</style>
