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
			transition: background-color 0.4s var(--ease-out-quint), transform 0.4s var(--ease-out-quint);
			transform: scale(1.75);
		}

		&:hover::after {
			background-color: hsla(200, 100%, 36%, 0.15);
			transform: scale3d(1.5, 1.5, 1);
		}
	}
</style>
