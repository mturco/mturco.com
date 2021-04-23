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
	import { formatPostDate } from './_lib/utils';
	import type { IPost } from './_lib/types';
	import Post from './_lib/Post.svelte';

	export let post: IPost;

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
