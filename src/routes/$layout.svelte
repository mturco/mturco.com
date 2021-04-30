<script lang="ts">
	import { applyThemePreference } from '$lib/theme';
	import '../normalize.css';
	import '../variables.css';
	import '../app.css';

	applyThemePreference();
</script>

<slot />
