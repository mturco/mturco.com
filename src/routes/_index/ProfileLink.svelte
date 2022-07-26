<script lang="ts">
  let labelWidth: number;

  export let href: string;
  export let external = false;
</script>

<a {href} rel={external ? 'external' : undefined} style="--label-width: {labelWidth}px">
  <slot name="icon" />
  <span bind:clientWidth={labelWidth}><slot name="label" /></span>
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
    border-radius: 3.25rem;
    transition: border-color var(--anim-duration) var(--anim-easing),
      max-width var(--anim-duration) var(--anim-easing);
    text-decoration: none;
    overflow: hidden;
    max-width: 3.25rem;

    &:hover {
      border-color: var(--color-primary);
    }

    &:hover,
    &:focus {
      max-width: calc(3.25rem + 0.5rem + var(--label-width));
    }

    &:hover span,
    &:focus span {
      opacity: 1;
    }
  }

  span {
    margin-left: 0.5rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity var(--anim-duration) var(--anim-easing);
  }

  a :global(svg) {
    flex: 0 0 1.75rem;
    width: 1.75rem;
    height: 1.75rem;
    fill: currentColor;
  }
</style>
