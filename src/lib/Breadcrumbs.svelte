<script lang="ts">
  import { getContext } from 'svelte';
  import { breadcrumbsContext } from './context';

  const { breadcrumbs } = getContext(breadcrumbsContext);
</script>

{#if $breadcrumbs.size}
  <nav aria-label="breadcrumbs">
    <ol>
      {#each Array.from($breadcrumbs.values()) as { title, href }, index}
        {#if index < $breadcrumbs.size - 1}
          <li>
            <a {href}>{title}</a>
          </li>
        {:else}
          <li class="current">
            {title}
          </li>
        {/if}
      {/each}
    </ol>
  </nav>
{/if}

<style lang="postcss">
  nav {
    font-size: 1rem;
  }

  ol {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li::before {
    content: '/';
    color: var(--color-text-lc);
    margin: 0 0.75rem;
    font-weight: normal;
  }

  .current {
    font-weight: bold;
  }
</style>
