<script lang="ts">
  import { dev } from '$app/env';

  export let status: number;
  export let error: Error;

  const offline = typeof navigator !== 'undefined' && navigator.onLine === false;
  const title = offline ? 'Offline' : status;
  const message = offline ? 'Find the internet and try again' : error?.message;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <h1>{title}</h1>
  <p>{message}</p>
</main>

{#if dev && error?.stack}
  <pre>{error.stack}</pre>
{/if}

<style>
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
</style>
