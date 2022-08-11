<script lang="ts">
  export let href: string;
</script>

<a {href}>
  <slot name="icon" />
  <span><slot name="label" /></span>
</a>

<style lang="postcss">
  a {
    --anim-duration: 0.5s;
    --anim-easing: var(--ease-out-quint);

    color: var(--color-text);
    padding: 0.625rem;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.75rem;
    border: 2px solid var(--color-divider-lc);
    border-radius: 0.5rem;
    transition: border-color var(--anim-duration) var(--anim-easing);
    text-decoration: none;

    &:hover {
      border-color: var(--color-primary);
    }
  }

  span {
    margin-left: 0.5rem;
    white-space: nowrap;
  }

  a :global(svg) {
    flex: 0 0 1.75rem;
    width: 1.75rem;
    height: 1.75rem;
    fill: currentColor;
  }
</style>
