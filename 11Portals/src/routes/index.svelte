<script>
	import SearchFilter from '$lib/SearchFilter.svelte';
	import Field from '$lib/Field.svelte';
	import Markdown from '$lib/Markdown.svelte';
	import Portal from '$lib/Portal.svelte';
	let isToggled = false;

	let text = 'hi';

	let search = '';
	let items = ['Samson', 'scott', 'wes', 'landon', 'courtney', 'lucie', 'brooklyn'];
</script>

<h1>Welcome to Level UI {search}</h1>

<Portal>
	<Markdown bind:text />
</Portal>

<Field bind:value={search} label="Search" instructions="Type to search" placeholder="Joe" />
<Field value={0} label="Number" type="number" />

<SearchFilter {items} bind:search />

<!-- 
<BetterAccordion isOpen={false} buttonText="Do I need a credit card?">
	<div>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quasi nesciunt placeat
			molestias eum autem iure nam est odio, unde quia magni quam delectus voluptate beatae et neque
			tenetur. Laudantium!
		</p>
	</div>
</BetterAccordion> -->
<!-- 
<Toggle bind:isToggled label="Beta" />
<Toggle bind:isToggled label="Beta" style="--toggleBackgroundColor: red;" /> -->

{#if isToggled}
	<h1>I'm toggled</h1>
{/if}
