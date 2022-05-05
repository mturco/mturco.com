<script lang="ts">
  export let title: string;
</script>

<section style="--grid-area: {title.replace(' ', '-').toLowerCase()}">
  <h1>{title}</h1>

  <slot />
</section>

<style lang="postcss">
  section {
    grid-area: var(--grid-area);

    @media print, (min-width: 60rem) {
      padding: 0 var(--section-item-gap);
    }
  }

  h1 {
    margin: 2.5rem 0 1.25rem 0;
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--grid-line-color);
    line-height: 1;
    padding: 0 0 0.25rem 0;
    border-bottom: 1.5px solid var(--grid-line-color);
  }
</style>
