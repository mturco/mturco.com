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
		border-radius: 50%;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: inherit;
			transition: background-color 0.5s var(--ease-out-quint), transform 0.5s var(--ease-out-quint);
			transform: scale3d(2, 2, 1);
			pointer-events: none;
		}

		&:hover::after {
			background-color: var(--color-highlight);
			transform: scale3d(1.5, 1.5, 1);
		}
	}
</style>
