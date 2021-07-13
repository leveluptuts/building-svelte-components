<script>
	export let items;
	let search = '';

	$: filteredSearch = items.filter((item) => {
		return search === '' || item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
	});
</script>

<label>
	Search Names: <br />
	<input bind:value={search} type="text" placeholder="Search" />
</label>

<ul>
	{#each filteredSearch as item}
		<li>{item}</li>
	{/each}
</ul>
