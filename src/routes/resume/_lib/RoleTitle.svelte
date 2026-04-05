<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<p>{@render children()}</p>

<style lang="postcss">
  p {
    flex: 0 0 auto;
    margin: 0;
    font-size: 1.0625rem;
  }
</style>
