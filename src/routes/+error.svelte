<script lang="ts">
  import { dev } from '$app/env';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status}</title>
</svelte:head>

<main>
  <h1>{$page.status}</h1>

  {#if $page.error?.message}
    <p>{$page.error.message}</p>
  {/if}
</main>

{#if dev && $page.error?.stack}
  <pre>{$page.error.stack}</pre>
{/if}

<style>
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  /* prettier-ignore */
  h1 {
    --color: var(--color-primary);
    --width: 1px;
    font-size: 5rem;
    margin: 1rem 0;
    color: var(--color-background);
    text-shadow:
      calc(var(--width) * -1) calc(var(--width) * -1) 0 var(--color),
      0 calc(var(--width) * -1) 0 var(--color),
      var(--width) calc(var(--width) * -1) 0 var(--color),
      var(--width) 0 0 var(--color),
      var(--width) var(--width) 0 var(--color),
      0 var(--width) 0 var(--color),
      calc(var(--width) * -1) var(--width) 0 var(--color),
      calc(var(--width) * -1) 0 0 var(--color);
  }
</style>
