<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    children: Snippet;
  }

  let { href, children }: Props = $props();
</script>

<a {href}>
  {@render children()}
</a>

<style lang="postcss">
  a {
    position: relative;
    isolation: isolate;
    display: inline-flex;
    padding: 0.625rem 0.875rem;
    color: var(--color-text);
    font-size: 1rem;
    text-decoration: none;
    line-height: normal;
    transition:
      color 0.5s var(--ease-out-quint),
      background-color 0.5s var(--ease-out-quint);
    background-color: var(--color-background-alt);
    border-radius: 5px;
    white-space: nowrap;

    &:hover {
      color: var(--color-primary);
      background-color: var(--color-highlight);
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      transform: scale3d(1.1, 1.25, 1);
      border: 2px solid transparent;
      pointer-events: none;
      transition:
        border-color 0.5s var(--ease-out-quint),
        transform 0.5s var(--ease-out-quint);
    }

    &:hover::after {
      border-color: var(--color-primary);
      transform: none;
    }
  }
</style>
