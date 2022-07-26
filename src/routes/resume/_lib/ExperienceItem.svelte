<script lang="ts">
  import Details from '$lib/Details.svelte';
  import CompanyTitle from './CompanyTitle.svelte';

  export let company: string;
  export let open = false;
  export let placeholder = false;
</script>

<div class="container">
  {#if placeholder}
    <div class="summary">
      <CompanyTitle>{company}</CompanyTitle>
      <slot name="roles" />
    </div>
  {:else}
    <Details {open}>
      <div class="summary" slot="summary">
        <CompanyTitle>{company}</CompanyTitle>
        <slot name="roles" />
      </div>

      <div class="content">
        <slot name="content" />
      </div>
    </Details>
  {/if}
</div>

<style lang="postcss">
  .container {
    margin: 0 -0.5rem 0.5rem;

    @media print, (min-width: 60rem) {
      margin: 0 -1rem 0.5rem;
    }
  }

  .summary {
    padding: 0.25rem 0.5rem;

    @media print, (min-width: 60rem) {
      padding: 0.5rem 1rem;
    }
  }

  .content {
    padding: 0 1rem 1rem;
  }
</style>
