<script lang="ts">
  export let title: string;
</script>

<section>
  <h1>{title}</h1>

  <slot />
</section>

<style lang="postcss">
  h1 {
    font-size: 0.8125em;
    font-weight: 700;
    color: var(--color-text);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 0 0 2rem;

    &::after {
      content: '';
      width: 2rem;
      height: 0.25rem;
      display: block;
      border: 2px solid var(--color-primary);
      border-radius: 4px;
      margin-top: 1rem;
    }
  }
</style>
