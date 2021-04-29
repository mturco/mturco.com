<script lang="ts">
	export let href: string;
	export let external: boolean = false;
</script>

<a {href} rel={external ? 'external' : undefined}>
	<slot name="icon" />
	<span><slot name="label" /></span>
</a>

<style lang="postcss">
	a {
		display: flex;
		justify-content: center;
		position: relative;
		width: 100px;
		height: 100px;
		font-size: 0.875em;
		color: var(--color-text);
		text-decoration: none;
		flex-direction: column;
		align-items: center;
		transition: all 0.4s var(--ease-out-quint);

		&:hover {
			color: var(--color-primary);
			transform: translateY(-7px);
		}

		&::after {
			position: absolute;
			top: -5px;
			right: -5px;
			bottom: -5px;
			left: -5px;
			z-index: -1;
			content: '';
			border-radius: 50%;
			transition: all 0.4s var(--ease-out-quint);
			transform: scale3d(1.15, 1.15, 1);
			pointer-events: none;
		}

		&:hover::after {
			background-color: var(--color-background-alt);
			transform: none;
		}
	}

	span {
		margin-top: 5px;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
	}

	a :global(svg) {
		width: 48px;
		height: 48px;
		fill: currentColor;
		filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.15));
	}
</style>
