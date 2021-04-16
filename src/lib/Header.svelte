<script lang="ts">
	import Logo from '$lib/Logo.svelte';
</script>

<header>
	<div>
		<a class="logo" href="/"><Logo /></a>
	</div>
</header>

<style lang="postcss">
	header {
		border-bottom: 1px solid var(--color-divider-lc);
	}

	div {
		max-width: var(--page-max-width);
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3.5rem;
	}

	.logo {
		color: var(--color-text-lc);
		font: 700 1.75em Montserrat, var(--font-base);
		letter-spacing: 0.03em;
		text-decoration-color: transparent;

		&:hover {
			color: var(--color-primary);
		}
	}
</style>
