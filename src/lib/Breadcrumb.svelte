<script lang="ts">
  import { getContext, onDestroy, onMount } from 'svelte';
  import { breadcrumbsContext } from '$lib/context';

  export let title: string;
  export let href: string;

  const breadcrumb = { title, href };
  const { breadcrumbs } = getContext(breadcrumbsContext);

  onMount(() => breadcrumbs.toggle(breadcrumb));
  onDestroy(() => breadcrumbs.toggle(breadcrumb));
</script>
