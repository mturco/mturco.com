<script lang="ts">
  import Header from '$lib/Header.svelte';
  import PageContainer from '$lib/PageContainer.svelte';
  import Breadcrumb from '$lib/Breadcrumb.svelte';
</script>

<Breadcrumb title="Reading List" href="/reading-list" />

<Header />

<PageContainer>
  <div class="content">
    <slot />
  </div>
</PageContainer>

<style lang="postcss">
  .content {
    font-size: 1.125rem;
    line-height: 1.7;
  }
</style>
