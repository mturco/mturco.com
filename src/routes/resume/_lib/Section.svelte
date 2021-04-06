<script lang="ts">
	export let title: string;
	export let primary: boolean = false;
</script>

<section class:primary style={`--grid-area: ${title.toLowerCase()}`}>
	<header>
		<h1>{title}</h1>
	</header>

	<slot />
</section>

<style lang="postcss">
	section {
		grid-area: var(--grid-area);
	}

	.primary {
		--grid-line-color: var(--color-primary);
	}

	header {
		position: relative;
		margin: 0 0 1rem 0;

		@media print {
			margin-bottom: 0.75rem;
		}
	}

	h1 {
		margin: 0;
		font-weight: 700;
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--grid-line-color);
		line-height: 1;
		display: inline-flex;
		padding: 0.25rem 0.375rem;
		border: 2px solid var(--grid-line-color);
		border-radius: 2px 0 2px 2px;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0.5rem;
			right: 0;
			border-top: 2px solid var(--grid-line-color);
		}
	}
</style>
