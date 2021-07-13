<script>
	export let label = '';
	export let instructions = '';
	export let style = '';
	export let value;
	export let placeholder;
	export let type = 'text';

	function handleInput(e) {
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	}
</script>

<div {style}>
	<label>
		{#if label}
			<span>
				{label}
			</span>
			<br />
		{/if}
		{#if instructions}
			<span class="instructions">
				{instructions}
			</span>
			<br />
		{/if}
		<input on:input={handleInput} {type} {value} {placeholder} />
	</label>
</div>

<style>
	div {
		margin-bottom: 1rem;
	}

	.instructions {
		opacity: 0.7;
		font-size: var(--instructionsFontSize, 14px);
	}
</style>
