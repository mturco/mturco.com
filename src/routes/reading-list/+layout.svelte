<script lang="ts">
  import Header from '$lib/Header.svelte';
  import Breadcrumb from '$lib/Breadcrumb.svelte';
</script>

<Breadcrumb title="Reading List" href="/reading-list" />

<div class="wrapper">
  <Header />

  <div class="content">
    <slot />
  </div>
</div>

<style lang="postcss">
  .wrapper {
    --page-max-width: var(--page-width-narrow);
  }

  .content {
    margin: 10vh auto;
    padding: 0 1rem;
    max-width: var(--page-max-width);
    font-size: 1.125rem;
    line-height: 1.7;
  }
</style>
