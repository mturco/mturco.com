<script lang="ts">
	import PostHeader from './PostHeader.svelte';
	import type { Post } from './types';

	export let post: Post;
</script>

<article>
	<PostHeader {post} />

	{@html post.html}
</article>

<style lang="postcss">
</style>
