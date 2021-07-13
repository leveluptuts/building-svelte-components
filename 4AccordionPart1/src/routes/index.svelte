<script>
	import Accordion from '$lib/Accordion.svelte';
	import Toggle from '$lib/Toggle.svelte';
	let isToggled = false;
</script>

<h1>Welcome to Level UI</h1>

<Accordion isOpen={true} buttonText="Do I need a credit card?">
	<div>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quasi nesciunt placeat
			molestias eum autem iure nam est odio, unde quia magni quam delectus voluptate beatae et neque
			tenetur. Laudantium!
		</p>
	</div>
</Accordion>

<Toggle bind:isToggled label="Beta" />
<Toggle bind:isToggled label="Beta" style="--toggleBackgroundColor: red;" />

{#if isToggled}
	<h1>I'm toggled</h1>
{/if}
