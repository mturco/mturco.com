<script lang="ts">
	export let status: number;
	export let error: Error;
</script>

<main>
	<h1>{status}</h1>
	<p>{error.message}</p>
</main>

<style>
	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;
	}
</style>
