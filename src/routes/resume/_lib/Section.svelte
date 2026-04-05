<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    className?: string;
    children: Snippet;
  }

  let { title, className = undefined, children }: Props = $props();
</script>

<section style="--grid-area: {title.replace(' ', '-').toLowerCase()}" class={className}>
  <h1>{title}</h1>

  {@render children()}
</section>

<style lang="postcss">
  section {
    grid-area: var(--grid-area);
    margin-top: 2rem;

    @media print, (min-width: 60rem) {
      padding: var(--section-item-gap);
      margin-top: 0;
    }
  }

  h1 {
    margin: 0 0 1.5rem 0;
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--grid-line-color);
    line-height: 1;

    &::after {
      background: var(--color-primary);
      border-radius: 4px;
      content: '';
      display: block;
      height: 4px;
      margin-top: 1rem;
      width: 2rem;
    }

    @media print {
      margin-bottom: 1.25rem;

      &::after {
        margin-top: 0.75rem;
        height: 3px;
      }
    }
  }
</style>
