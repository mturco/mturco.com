<script lang="ts">
	import { format } from 'date-fns';
	import Link from '$lib/Link.svelte';
	import type { Post } from './types';

	export let post: Post;
	export let size: 'large' | 'normal' = 'normal';
</script>

<h1 class={size}>
	<Link href="/reading-list/{post.id}">{post.title}</Link> <span class="slash">/</span>
	<span class="date">{format(new Date(post.date), 'MMM d, y')}</span>
</h1>

<style lang="postcss">
	h1 {
		font-weight: 800;
	}

	.normal {
		font-size: 2rem;
	}

	.large {
		font-size: 3rem;
	}

	.slash {
		font-weight: 400;
		margin: 0 0.5ch;
		color: var(--color-divider-lc);
	}

	.date {
		font-weight: 400;
		font-size: 0.75em;
		color: var(--color-text-lc);
	}
</style>
