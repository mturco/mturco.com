<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div>
  {@render children()}
</div>

<style lang="postcss">
  div {
    margin: 10vh auto;
    padding: 0 1rem;
    max-width: var(--page-width-narrow);
  }
</style>
