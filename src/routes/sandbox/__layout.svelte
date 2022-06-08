<script lang="ts">
  import Header from '$lib/Header.svelte';
  import Breadcrumb from '$lib/Breadcrumb.svelte';
</script>

<Breadcrumb title="Sandboxes" href="/sandbox" />

<Header />

<div class="content">
  <slot />
</div>

<style lang="postcss">
  .content {
    padding: 1rem;
  }
</style>
