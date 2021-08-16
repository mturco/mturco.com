<script context="module" lang="ts">
  export async function load({ page, fetch }) {
    const res = await fetch(`/reading-list/${page.params.issue}.json`);
    const { post, next, prev } = await res.json();

    if (res.ok) {
      return { props: { post, next, prev } };
    }

    return {
      status: res.status,
      error: new Error('Failed to load post'),
    };
  }
</script>

<script lang="ts">
  import Breadcrumb from '$lib/Breadcrumb.svelte';
  import NavLink from '$lib/NavLink.svelte';
  import { formatPostDate } from './_lib/utils';
  import type { IPost } from './_lib/types';
  import Post from './_lib/Post.svelte';

  export let post: IPost;
  export let next: number | null;
  export let prev: number | null;

  $: title = `Reading List ${post.title} — ${formatPostDate(post.date)}`;
  $: description = `Matt Turco's weekly reading list on software and design. This week: ${post.description}`;
</script>

<svelte:head>
  <title>{title} | Matt Turco</title>
  <meta name="description" content={description} />
  <meta property="og:url" content={post.permalink} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@matt_turco" />
  <meta name="twitter:creator" content="@matt_turco" />
</svelte:head>

<Breadcrumb title={`#${post.id}`} href={post.url} />

<Post {post} />

<nav class="pagination">
  {#if prev}
    <NavLink href="/reading-list/{prev}">← Prev</NavLink>
  {/if}
  {#if next}
    <span class="right">
      <NavLink href="/reading-list/{next}">Next →</NavLink>
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
