<script lang="ts">
	import Content from '$lib/Content.svelte';
	import PostHeader from './PostHeader.svelte';
	import type { IPost } from './types';

	export let post: IPost;
	export let linkHeading = false;
</script>

<article>
	<PostHeader {post} {linkHeading} standalone />

	<div class="content">
		<Content>
			{@html post.html}
		</Content>
	</div>
</article>

<style lang="postcss">
	.content :global(h1) {
		font-size: 1.25em;
		line-height: 1.5;
	}

	.content :global(h2) {
		font-size: 1em;
		line-height: 1.5;
	}
</style>
