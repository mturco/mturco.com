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
		position: relative;
		display: inline-flex;
		color: var(--color-primary);

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: 50%;
			transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
			transform: scale(1.75);
		}

		&:hover::after {
			background-color: hsla(200, 100%, 36%, 0.15);
			transform: scale(1.5);
		}
	}
</style>
