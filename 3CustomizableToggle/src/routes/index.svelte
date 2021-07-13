<script>
	import Toggle from '$lib/Toggle.svelte';
	let isToggled = false;
</script>

<h1>Welcome to Level UI</h1>

<Toggle bind:isToggled label="Beta" />
<Toggle bind:isToggled label="Beta" style="--toggleBackgroundColor: red;" />

{#if isToggled}
	<h1>I'm toggled</h1>
{/if}
