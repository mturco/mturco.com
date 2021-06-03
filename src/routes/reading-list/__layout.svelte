<script lang="ts">
  import Header from '$lib/Header.svelte';
</script>

<div class="wrapper">
  <Header />

  <div class="content">
    <slot />
  </div>
</div>

<style lang="postcss">
  .wrapper {
    --page-max-width: 46rem;
  }

  .content {
    margin: 10vh auto;
    padding: 0 1rem;
    max-width: var(--page-max-width);
    font-size: 1.125rem;
    line-height: 1.7;
  }
</style>
