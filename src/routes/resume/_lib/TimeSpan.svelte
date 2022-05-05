<script lang="ts">
  import { format, formatDuration, intervalToDuration, parseISO } from 'date-fns';

  const dateFormat = 'MMM y';
  export let from: string;
  export let to: string = '';

  $: fromDate = parseISO(from);
  $: fromString = format(fromDate, dateFormat);
  $: toDate = to ? parseISO(to) : new Date();
  $: toString = to ? format(toDate, dateFormat) : 'now';
  // $: duration = intervalToDuration({ start: fromDate, end: toDate });
  // $: durationString = formatDuration(duration, { format: ['years', 'months'] });
</script>

<!-- <div>{fromString}–{toString} · {durationString}</div> -->
<div>{fromString}–{toString}</div>

<style lang="postcss">
  div {
    color: var(--color-text-lc);
    margin-bottom: 0.5rem;
    font-size: 0.875em;

    @media print, (min-width: 38rem) {
      margin-bottom: 0;
    }
  }

  div::before {
    @media print, (min-width: 38rem) {
      content: '';
      display: inline-flex;
      vertical-align: middle;
      margin: 0 0.375rem 0 1.125rem;
      transform: rotateZ(30deg);
      height: 1.375rem;
      border-left: 2px solid var(--color-primary);
      transform-origin: top;
    }
  }
</style>
