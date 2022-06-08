<script lang="ts">
  import { onMount } from 'svelte';
  import Breadcrumb from '$lib/Breadcrumb.svelte';
  import { format, isToday, isWeekend } from 'date-fns';

  const year = new Date().getFullYear();
  const jan1 = new Date(year, 0, 1);
  const jan1DayofWeek = jan1.getDay();

  const dates = [
    ...new Array(jan1DayofWeek === 0 ? 6 : jan1DayofWeek - 1).fill(null),
    ...new Array(365).fill(null).map((_, i) => new Date(year, 0, i + 1)),
  ];

  const dayOfWeekAbbreviations = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  let dayOfWeekHeaders = dayOfWeekAbbreviations;
  let isNonMobile = true;
  $: dayOfWeekHeaders = [...dayOfWeekAbbreviations, ...(isNonMobile ? dayOfWeekAbbreviations : [])];

  onMount(() => {
    const mql = window.matchMedia('(min-width: 48rem)');
    const listener = (evt: MediaQueryListEvent) => (isNonMobile = evt.matches);
    mql.addEventListener('change', listener);
    isNonMobile = mql.matches;
    return () => mql.removeEventListener('change', listener);
  });
</script>

<svelte:head>
  <title>Year Calendar | Matt Turco</title>
</svelte:head>

<Breadcrumb title="Year Calendar" href="/sandbox/year-calendar" />

<h1>{year}</h1>

<div class="calendar">
  {#each dayOfWeekHeaders as header}
    <div class="header">{header}</div>
  {/each}

  {#each dates as date}
    {#if !date}
      <div />
    {:else}
      <div
        class="day"
        class:first-of-month={date.getDate() === 1}
        class:weekend={isWeekend(date)}
        class:today={isToday(date)}
      >
        {#if date.getDate() === 1}
          {format(date, 'MMM')} <span class="sr-only">{date.getDate()}</span>
        {:else}
          <span class="sr-only">{format(date, 'MMM')}</span> {date.getDate()}
        {/if}
      </div>
    {/if}
  {/each}
</div>

<style lang="postcss">
  h1 {
    font-size: 4rem;
    font-weight: 200;
    margin: 2rem 0;
    color: var(--color-primary);
    text-align: center;
  }

  .calendar {
    --bg-alt: rgba(0 0 0 / 0.04);
    --bg-alt-dark: rgba(255 255 255 / 0.04);

    max-width: 64rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;

    @media (min-width: 48rem) {
      grid-template-columns: repeat(14, 1fr);
    }
  }

  .header {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-align: center;
    color: var(--color-text-lc);
    padding: 1rem 0;
  }

  .day {
    box-shadow: inset 0 1px 0 var(--color-divider-lc);
    padding: 3px 0;
    aspect-ratio: 1;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
  }

  .first-of-month {
    box-shadow: inset 0 2px 0 var(--color-primary);
    color: var(--color-primary);
    font-weight: 700;
  }

  .weekend {
    background-color: var(--bg-alt);
  }

  .today {
    background-color: var(--color-highlight);
    box-shadow: inset 0 2px 0 var(--color-highlight);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  :global(.theme-dark) .calendar {
    --bg-alt: var(--bg-alt-dark);
  }

  @media (prefers-color-scheme: dark) {
    :global(:root:not(.theme-light)) .calendar {
      --bg-alt: var(--bg-alt-dark);
    }
  }
</style>
