<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch(`/reading-list/all.json`);
		const { posts } = await res.json();
		const [latest, ...previousPosts] = posts;

		if (res.ok) {
			return { props: { latest, previousPosts } };
		}

		return {
			status: res.status,
			error: new Error('Failed to load post')
		};
	}
</script>

<script lang="ts">
	import type { IPost } from './_lib/types';
	import PostPreview from './_lib/PostPreview.svelte';

	export let latest: IPost;
	export let previousPosts: IPost[];
</script>

<svelte:head>
	<title>Reading List | Matt Turco</title>
	<meta
		name="description"
		content="Matt Turco's weekly reading list of interesting articles, blog posts, tweets, talks, etc."
	/>
</svelte:head>

<main>
	<header>
		<h1>Reading List</h1>
		<p>
			Weekly-ish list of articles, blog posts, tweets, talks, projects, etc that I found interesting
			or learned something from. Usually related to web development, software, or design in some way
			but occasionally general interest. Not all content is necessarily fresh—I share things as I
			find them!
		</p>

		<p>With that said, here's the most recent reading list. Enjoy!</p>
	</header>

	<div class="latest">
		<PostPreview post={latest} latest />
	</div>

	<h2>Previous Reading Lists</h2>

	<div class="previous">
		{#each previousPosts as post}
			<PostPreview {post} />
		{/each}
	</div>
</main>

<style>
	h1 {
		font: 700 1.25em Montserrat, var(--font-base);
		margin: 0.5em 0;
	}

	h2 {
		font: 700 0.75em Montserrat, var(--font-base);
		margin: 0.5em 0;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.latest {
		margin: 3rem 0 7rem;
	}

	.previous {
		margin: 1rem -1.5rem;
	}
</style>
