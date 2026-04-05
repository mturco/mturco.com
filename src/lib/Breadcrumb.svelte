<script lang="ts">
  import { getContext } from 'svelte';
  import { breadcrumbsContext } from '$lib/context';
  import type { BreadcrumbsContext } from '$lib/context';

  interface Props {
    title: string;
    href: string;
  }

  let { title, href }: Props = $props();

  const { breadcrumbs } = getContext<BreadcrumbsContext>(breadcrumbsContext);

  $effect(() => {
    const breadcrumb = { title, href };
    breadcrumbs.add(breadcrumb);

    return () => {
      breadcrumbs.remove(breadcrumb);
    };
  });
</script>
