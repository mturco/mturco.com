<script lang="ts">
  import netlifyIdentity from 'netlify-identity-widget';
  import type { User } from 'netlify-identity-widget';

  if (netlifyIdentity) {
    netlifyIdentity.on('init', (user: User) => {
      if (!user) {
        netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });
  }
</script>

<svelte:head>
  <title>Login | Matt Turco</title>
</svelte:head>
