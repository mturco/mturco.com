<script lang="ts">
  import { getContext, onDestroy, onMount } from 'svelte';
  import { breadcrumbsContext } from '$lib/context';

  export let title: string;
  export let href: string;

  let breadcrumb = { title, href };
  const { breadcrumbs } = getContext(breadcrumbsContext);

  $: {
    breadcrumbs.remove(breadcrumb);
    breadcrumb = { title, href };
    breadcrumbs.add(breadcrumb);
  }

  onDestroy(() => breadcrumbs.remove(breadcrumb));
</script>
