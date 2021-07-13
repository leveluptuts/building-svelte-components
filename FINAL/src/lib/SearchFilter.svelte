<script>
	import { fade } from 'svelte/transition';
	export let items;
	export let search = '';
	let isFocused = false;

	$: filteredSearch = items.filter((item) => {
		return search === '' || item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
	});
</script>

<div class="wrapper">
	<label>
		Search Names: <br />
		<input
			on:focus={() => (isFocused = true)}
			bind:value={search}
			type="text"
			placeholder="Search"
		/>
	</label>

	{#if isFocused}
		<ul transition:fade={{ duration: 200 }}>
			{#each filteredSearch as item}
				<li
					transition:fade={{ duration: 200 }}
					on:click={() => {
						search = item;
						isFocused = false;
					}}
				>
					{item}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.wrapper {
		position: relative;
		display: inline-block;
	}
	ul {
		position: absolute;
		width: 100%;
		border: solid 1px black;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		padding: 10px;
		cursor: pointer;
		transition: 0.3s background ease;
	}
	li:hover {
		background: var(--listItemBackground, #eee);
	}
</style>
