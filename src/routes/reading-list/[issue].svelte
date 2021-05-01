<script context="module" lang="ts">
	export async function load({ page, fetch }) {
		const res = await fetch(`/reading-list/${page.params.issue}.json`);
		const { post, next, prev } = await res.json();

		if (res.ok) {
			return { props: { post, next, prev } };
		}

		return {
			status: res.status,
			error: new Error('Failed to load post')
		};
	}
</script>

<script lang="ts">
	import NavLink from '$lib/NavLink.svelte';
	import { formatPostDate } from './_lib/utils';
	import type { IPost } from './_lib/types';
	import Post from './_lib/Post.svelte';

	export let post: IPost;
	export let next: number | null;
	export let prev: number | null;

	export const title = `Reading List ${post.title} — ${formatPostDate(post.date)}`;
</script>

<svelte:head>
	<title>{title} | Matt Turco</title>
	<meta
		name="description"
		content="Matt Turco's weekly reading list of interesting articles, blog posts, tweets, talk, etc."
	/>
	<meta property="og:url" content={post.permalink} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@matt_turco" />
	<meta name="twitter:creator" content="@matt_turco" />
</svelte:head>

<Post {post} />

<nav>
	<div class="nav-item">
		{#if prev}
			<NavLink href="/reading-list/{prev}">← Prev</NavLink>
		{/if}
	</div>
	<div class="nav-item">
		<NavLink href="/reading-list/archive">View All</NavLink>
	</div>
	<div class="nav-item">
		{#if next}
			<NavLink href="/reading-list/{next}">Next →</NavLink>
		{/if}
	</div>
</nav>

<style lang="postcss">
	nav {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-items: center;
		margin-top: 5rem;
	}

	.nav-item {
		&:first-child {
			justify-self: start;
		}

		&:last-child {
			justify-self: end;
		}
	}
</style>
