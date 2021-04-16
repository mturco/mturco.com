<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch(`/reading-list/all.json`);
		const { posts } = await res.json();

		if (res.ok) {
			return { props: { posts } };
		}

		return {
			status: res.status,
			error: new Error('Failed to load post')
		};
	}
</script>

<script lang="ts">
	import type { IPost } from './_lib/types';
	import PostHeader from './_lib/PostHeader.svelte';

	export let posts: IPost[];
</script>

<svelte:head>
	<title>Reading List Archive | Matt Turco</title>
	<meta
		name="description"
		content="Archive Matt Turco's weekly reading lists of interesting articles, blog posts, tweets, talk, etc."
	/>
</svelte:head>

<div>
	{#each posts as post}
		<PostHeader {post} />
	{/each}
</div>

<style lang="postcss">
	div {
		margin: 0 auto;
		width: max-content;
	}
</style>
