<script lang="ts">
	import Logo from '$lib/Logo.svelte';
	import ThemeToggle from '$lib/ThemeToggle.svelte';
</script>

<header>
	<a class="logo" href="/"><Logo /></a>

	<span class="theme-toggle">
		<ThemeToggle />
	</span>
</header>

<style lang="postcss">
	header {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas: 'left center right';
		justify-items: center;
		align-items: center;
		padding: 0 0.5rem;
		height: 3.5rem;
		border-bottom: 1px solid var(--color-divider-lc);
	}

	.logo {
		position: relative;
		display: inline-flex;
		color: var(--color-primary);
		border-radius: 50%;
		grid-area: center;

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

	.theme-toggle {
		justify-self: end;
		grid-area: right;
	}
</style>
