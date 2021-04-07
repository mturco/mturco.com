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

	<Link href="/reading-list/all">View All</Link>
</main>

<style>
	header {
	}

	header h1 {
		color: var(--color-primary);
		font: 700 3em Montserrat, var(--font-base);
		letter-spacing: 0.03em;
		margin: 0 0 0.5rem;
	}
</style>
