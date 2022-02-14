<script context="module" lang="ts">
  if (typeof window !== 'undefined') {
    if ((window as any).netlifyIdentity) {
      (window as any).netlifyIdentity.on('init', (user: unknown) => {
        if (!user) {
          (window as any).netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }
</script>

<svelte:head>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>
