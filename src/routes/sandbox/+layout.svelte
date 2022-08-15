<script lang="ts">
  import Header from '$lib/Header.svelte';
</script>

<Header />

<div class="content">
  <slot />
</div>

<style lang="postcss">
  .content {
    padding: 1rem;
  }
</style>
