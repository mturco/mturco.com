<script lang="ts">
	import Link from '$lib/Link.svelte';
	import type { IPost } from './types';
	import { formatPostDate } from './utils';

	export let post: IPost;
	export let standalone = false;
</script>

<h1 class:standalone>
	{#if standalone}
		{post.title}
	{:else}
		<Link href={post.url}>{post.title}</Link>
	{/if}
	<span class="slash">/</span>
	<span class="date">{formatPostDate(post.date)}</span>
</h1>

<style lang="postcss">
	h1 {
		font-weight: 800;
		font-size: 2rem;
		margin: 0 0 0.5em;
	}

	.slash {
		font-weight: 400;
		margin: 0 0.5ch 0 0.125ch;
		color: var(--color-divider-lc);
	}

	.date {
		font-weight: 400;
		font-size: 0.625em;
		color: var(--color-text-lc);
	}

	.standalone {
		font-size: 3rem;

		& .date {
			font-size: 0.5em;
		}
	}
</style>
