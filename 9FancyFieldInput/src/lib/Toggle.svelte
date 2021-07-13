<script>
	export let label = '';
	export let isToggled = false;
	export let style = '';
</script>

<label {style}>
	<input type="checkbox" bind:checked={isToggled} />
	<div class="toggle" />
	{label}
</label>

<style>
	label {
		--width: 40px;
		--height: calc(var(--width) / 2);
		--radius: calc(var(--height) / 2);
		display: flex;
	}

	.toggle {
		position: relative;
		width: var(--width);
		height: var(--height);
		border-radius: var(--radius);
		border: solid 1px #333;
		transition: background-color 0.3s ease;
		margin-right: 5px;
		background-color: var(--toggleBackgroundColor, white);
	}

	.toggle::after {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		height: var(--height);
		width: var(--height);
		border-radius: var(--radius);
		background-color: var(--toggleButtonColor, aliceblue);
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}
	input {
		display: none;
	}

	input:checked + .toggle {
		background-color: var(--toggleCheckedBackgroundColor, green);
	}

	input:checked + .toggle::after {
		transform: translate3d(100%, 0, 0);
	}
</style>
