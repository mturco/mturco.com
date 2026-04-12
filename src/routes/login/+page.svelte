<script lang="ts">
  import { onMount } from 'svelte';
  import type { User } from 'netlify-identity-widget';

  onMount(async () => {
    const netlifyIdentity = (await import('netlify-identity-widget')).default;
    if (netlifyIdentity) {
      netlifyIdentity.on('init', (user: User | null) => {
        if (!user) {
          netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  });
</script>

<svelte:head>
  <title>Login | Matt Turco</title>
</svelte:head>
