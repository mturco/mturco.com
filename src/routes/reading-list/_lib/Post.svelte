<script lang="ts">
	import Content from '$lib/Content.svelte';
	import { formatPostDate } from './utils';
	import type { IPost } from './types';

	export let post: IPost;
</script>

<article>
	<h1>
		{post.title}
		<span class="slash">/</span>
		<span class="date">{formatPostDate(post.date)}</span>
	</h1>

	<div class="content">
		<Content>
			{@html post.html}
		</Content>
	</div>
</article>

<style lang="postcss">
	h1 {
		font-weight: 700;
		font-weight: 800;
		font-size: 3rem;
		margin: 0 0 0.5em;
	}

	.slash {
		font-weight: 400;
		margin: 0 0.5ch 0 0.125ch;
		color: var(--color-divider-lc);
	}

	.date {
		font-weight: 400;
		font-size: 0.5em;
		color: var(--color-text-lc);
	}

	.content :global(h1) {
		font-size: 1.25em;
		line-height: 1.5;
	}

	.content :global(h2) {
		font-size: 1em;
		line-height: 1.5;
	}
</style>
