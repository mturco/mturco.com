<script lang="ts">
	export let href: string;
</script>

<a {href}>
	<slot />
</a>

<style lang="postcss">
	a {
		position: relative;
		isolation: isolate;
		display: inline-flex;
		padding: 0.625rem 0.875rem;
		color: var(--color-text);
		font-size: 1rem;
		text-decoration: none;
		line-height: normal;
		transition: color 0.5s var(--ease-out-quint), background-color 0.5s var(--ease-out-quint);
		background-color: var(--color-background-alt);
		border-radius: 5px;
		outline: 0;

		&:hover,
		&:focus-visible {
			color: var(--color-primary);
			background-color: var(--color-highlight);
		}

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: inherit;
			transform: scale3d(1.1, 1.25, 1);
			border: 2px solid transparent;
			pointer-events: none;
			transition: border-color 0.5s var(--ease-out-quint), transform 0.5s var(--ease-out-quint);
		}

		&:hover::after,
		&:focus-visible::after {
			border-color: var(--color-primary);
			transform: none;
		}
	}
</style>
