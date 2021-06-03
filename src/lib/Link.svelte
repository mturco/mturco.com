<script lang="ts">
  export let href: string;
  export let external: boolean = false;
  export let inheritColor: boolean = false;
</script>

<a {href} rel={external ? 'external' : undefined} class:inherit-color={inheritColor}>
  <slot />
</a>

<style lang="postcss">
  a {
    color: var(--color-primary);
    text-decoration-color: transparent;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.15em;
    transition: text-decoration-color 0.2s ease-out;

    &:hover {
      text-decoration-color: currentColor;
    }
  }

  .inherit-color {
    color: inherit;
  }
</style>
