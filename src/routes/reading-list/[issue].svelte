<script context="module" lang="ts">
	export async function load({ page, fetch }) {
		const res = await fetch(`/reading-list/${page.params.issue}.json`);
		const { post } = await res.json();

		if (res.ok) {
			return { props: { post } };
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

	export let post: PostType;
</script>

<svelte:head>
	<title>Reading List {post.title} | Matt Turco</title>
</svelte:head>

<Post {post} />
