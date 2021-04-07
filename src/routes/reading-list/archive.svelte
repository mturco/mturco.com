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
	import type { Post as PostType } from './_lib/types';
	import PostHeader from './_lib/PostHeader.svelte';

	export let posts: PostType[];
</script>

<svelte:head>
	<title>Reading List Archive | Matt Turco</title>
</svelte:head>

{#each posts as post}
	<PostHeader {post} />
{/each}
