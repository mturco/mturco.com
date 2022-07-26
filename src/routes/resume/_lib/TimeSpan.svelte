<script lang="ts">
  import { format, parseISO } from 'date-fns';

  const dateFormat = 'MMM y';
  export let from: string;
  export let to: string = '';

  $: fromDate = parseISO(from);
  $: fromString = format(fromDate, dateFormat);
  $: toDate = to ? parseISO(to) : new Date();
  $: toString = to ? format(toDate, dateFormat) : 'present';
</script>

<div>{fromString}–{toString}</div>

<style lang="postcss">
  div {
    color: var(--color-text-lc);
    font-size: 1rem;
  }

  div::before {
    @media print, (min-width: 32rem) {
      content: '—';
      font-weight: 700;
      margin: 0 0.25rem;
      color: var(--color-primary);
    }
  }
</style>
