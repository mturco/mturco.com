<script lang="ts">
	import { format, parseISO } from 'date-fns';
	import Link from '$lib/Link.svelte';
	import type { Post } from './types';

	export let post: Post;
	export let standalone = false;
</script>

<h1 class:standalone>
	{#if standalone}
		{post.title}
	{:else}
		<Link href="/reading-list/{post.id}">{post.title}</Link>
	{/if}
	<span class="slash">/</span>
	<span class="date"
		>{format(parseISO(post.date.slice(0, post.date.indexOf('T'))), 'MMM d, y')}</span
	>
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
