<script lang="ts">
	let labelWidth: number;

	export let href: string;
	export let external: boolean = false;
</script>

<a {href} rel={external ? 'external' : undefined} style="--label-width: {labelWidth}px">
	<slot name="icon" />
	<span bind:clientWidth={labelWidth}><slot name="label" /></span>
</a>

<style lang="postcss">
	a {
		color: var(--color-text);
		padding: 0.5rem;
		display: inline-flex;
		justify-content: start;
		align-items: center;
		margin: 0.75rem;
		border: 2px solid var(--color-divider-lc);
		border-radius: 3.25rem;
		transition: border-color 0.5s var(--ease-out-quint), max-width 0.5s var(--ease-out-quint);
		text-decoration: none;
		overflow: hidden;
		max-width: 3.25rem;

		&:hover {
			border-color: var(--color-primary);
		}

		&:hover,
		&:focus {
			max-width: calc(3.25rem + 0.5rem + var(--label-width));
		}
	}

	span {
		margin-left: 0.5rem;
		white-space: nowrap;
	}

	a :global(svg) {
		flex: 0 0 2rem;
		width: 2rem;
		height: 2rem;
		fill: currentColor;
	}
</style>
