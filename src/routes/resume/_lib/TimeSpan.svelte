<script lang="ts">
  import { format, parseISO } from 'date-fns';

  interface Props {
    from: string;
    to?: string;
  }

  let { from, to = '' }: Props = $props();

  const dateFormat = 'MMM y';

  let fromDate = $derived(parseISO(from));
  let fromString = $derived(format(fromDate, dateFormat));
  let toDate = $derived(to ? parseISO(to) : new Date());
  let toString = $derived(to ? format(toDate, dateFormat) : 'present');
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
      margin: 0 0.375rem;
      color: var(--color-primary);
    }
  }
</style>
