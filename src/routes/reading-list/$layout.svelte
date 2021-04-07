<script lang="ts">
	import Logo from '$lib/Logo.svelte';
</script>

<header>
	<a href="/"><Logo /></a>
</header>

<div>
	<slot />
</div>

<style>
	header {
		display: flex;
		justify-content: center;
		padding: 0.5rem;
		border-bottom: 1px solid var(--color-divider-lc);
	}

	div {
		margin: 10vh auto;
		padding: 0 1rem;
		max-width: 60ch;
		font-size: 1.125rem;
		line-height: 1.7;
	}
</style>
