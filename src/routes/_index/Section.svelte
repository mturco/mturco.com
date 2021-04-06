<script lang="ts">
	export let title: string;
</script>

<section>
	<header>
		<h1>{title}</h1>
	</header>

	<slot />
</section>

<style lang="postcss">
	header {
		margin-bottom: 1rem;
		overflow: hidden;
		text-align: center;
	}

	h1 {
		display: inline-flex;
		position: relative;
		padding: 0 10px;
		font-size: 0.8125em;
		font-weight: 700;
		color: var(--color-primary);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin: 0;

		&::before,
		&::after {
			position: absolute;
			top: 50%;
			width: 100vw;
			content: '';
			border-top: 1px solid var(--color-divider-lc);
		}

		&::before {
			right: 100%;
		}

		&::after {
			left: 100%;
		}
	}
</style>
