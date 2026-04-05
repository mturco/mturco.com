<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Snippet } from 'svelte';
  import Details from '$lib/Details.svelte';
  import CollapseIcon from '$lib/icons/Collapse.svelte';
  import ExpandIcon from '$lib/icons/Expand.svelte';
  import CompanyTitle from './CompanyTitle.svelte';

  interface Props {
    company: string;
    open?: boolean;
    placeholder?: boolean;
    roles: Snippet;
    content?: Snippet;
  }

  let { company, open = $bindable(false), placeholder = false, roles, content }: Props = $props();

  const fadeIn = { duration: 250, delay: 250 };
  const fadeOut = { duration: 250 };
</script>

<div class="container">
  {#if placeholder}
    <div class="summary">
      <CompanyTitle>{company}</CompanyTitle>
      {@render roles()}
    </div>
  {:else}
    <Details bind:open>
      {#snippet summary()}
        <div class="summary">
          <CompanyTitle>{company}</CompanyTitle>
          {@render roles()}

          {#if open}
            <div class="icon" in:fade={fadeIn} out:fade={fadeOut}>
              <CollapseIcon />
            </div>
          {:else}
            <div class="icon" in:fade={fadeIn} out:fade={fadeOut}>
              <ExpandIcon />
            </div>
          {/if}
        </div>
      {/snippet}

      <div class="content">
        {#if content}
          {@render content()}
        {/if}
      </div>
    </Details>
  {/if}
</div>

<style lang="postcss">
  .container {
    margin: 0 -0.5rem 0.5rem;

    @media print, (min-width: 60rem) {
      margin-left: -1rem;
      margin-right: -1rem;
    }

    @media print {
      margin-bottom: 0;
    }
  }

  .summary {
    position: relative;
    padding: 0.25rem 2rem 0.25rem 0.5rem;

    @media print, (min-width: 60rem) {
      padding: 0.5rem 2.5rem 0.5rem 1rem;
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.25rem;
    width: 1.5rem;
    aspect-ratio: 1;
    color: var(--color-text-lc);

    @media screen and (min-width: 60rem) {
      right: 0.5rem;
    }

    @media print {
      display: none;
    }
  }

  .content {
    padding: 0 1rem 1rem;
  }
</style>
