<script lang="ts">
  import { setContext } from 'svelte';
  import { applyThemePreference } from '$lib/theme';
  import '../normalize.css';
  import '../variables.css';
  import '../app.css';
  import { breadcrumbsContext } from '$lib/context';
  import { createBreadcrumbsStore } from '$lib/stores';

  applyThemePreference();
  setContext(breadcrumbsContext, {
    breadcrumbs: createBreadcrumbsStore(),
  });
</script>

<slot />
