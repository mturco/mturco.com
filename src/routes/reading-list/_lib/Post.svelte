<script lang="ts">
	import Content from '$lib/Content.svelte';
	import PostHeader from './PostHeader.svelte';
	import type { IPost } from './types';

	export let post: IPost;
</script>

<article>
	<PostHeader {post} standalone />

	<Content>
		{@html post.html}
	</Content>
</article>

<style lang="postcss">
	article :global(h1) {
		font-size: 1.25em;
		line-height: 1.5;
	}

	article :global(h2) {
		font-size: 1em;
		line-height: 1.5;
	}
</style>
