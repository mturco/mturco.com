<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch(`/reading-list/all.json`);
		const { posts } = await res.json();

		const latest = posts.reduce((max, post) => (post.id > max.id ? post : max), posts[0]);

		if (res.ok) {
			return { props: { latest } };
		}

		return {
			status: res.status,
			error: new Error('Failed to load post')
		};
	}
</script>

<script lang="ts">
	import type { Post as PostType } from './_lib/types';
	import Post from './_lib/Post.svelte';
	import Link from '$lib/Link.svelte';

	export let latest: PostType;
</script>

<svelte:head>
	<title>Reading List | Matt Turco</title>
</svelte:head>

<main>
	<header>
		<h1>Reading List</h1>
		<p>
			Weekly list of articles, blog posts, tweets, talks, etc that I found interesting and/or
			learned something from. Here's the most recent reading list — enjoy!
		</p>
	</header>

	<Post post={latest} />

	<footer>
		<h1>Need more to read?</h1>
		<p>Give some <Link href="/reading-list/archive">archived reading lists</Link> a look.</p>
	</footer>
</main>

<style>
	header {
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--color-divider-lc);
		margin-bottom: 5rem;
	}

	h1 {
		font: 700 1.25em Montserrat, var(--font-base);
		margin: 0.5em 0;
	}

	footer {
		padding-top: 1rem;
		border-top: 1px solid var(--color-divider-lc);
		margin-top: 6rem;
	}
</style>
