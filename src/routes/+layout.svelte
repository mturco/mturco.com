<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { applyThemePreference } from '$lib/theme';
  import '../normalize.css';
  import '../variables.css';
  import '../app.css';
  import { breadcrumbsContext } from '$lib/context';
  import { createBreadcrumbsStore } from '$lib/stores';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  applyThemePreference();
  setContext(breadcrumbsContext, {
    breadcrumbs: createBreadcrumbsStore(),
  });
</script>

{@render children()}
