<script lang="ts">
  import Breadcrumb from '$lib/Breadcrumb.svelte';
  import LinkButton from '$lib/LinkButton.svelte';
  import { formatPostDate } from '../_lib/utils';
  import Post from '../_lib/Post.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: title = `Reading List ${data.post.title} — ${formatPostDate(data.post.date)}`;
  $: description = `Matt Turco's weekly reading list on software and design. This week: ${data.post.description}`;
</script>

<svelte:head>
  <title>{title} | Matt Turco</title>
  <meta name="description" content={description} />
  <meta property="og:url" content={data.post.permalink} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@matt_turco" />
  <meta name="twitter:creator" content="@matt_turco" />
</svelte:head>

<Breadcrumb title={`#${data.post.id}`} href={data.post.url} />

<Post post={data.post} />

<nav class="pagination">
  {#if data.prev}
    <LinkButton href="/reading-list/{data.prev}">← Prev</LinkButton>
  {/if}
  {#if data.next}
    <span class="right">
      <LinkButton href="/reading-list/{data.next}">Next →</LinkButton>
    </span>
  {/if}
</nav>

<style lang="postcss">
  .pagination {
    display: flex;
    margin-top: 5rem;
  }

  .right {
    margin-left: auto;
  }
</style>
