<label>
	<input type="checkbox" />
	<div class="toggle" />
	Label
</label>

<style>
	label {
		--width: 40px;
		--height: calc(var(--width) / 2);
		--radius: calc(var(--height) / 2);
	}

	.toggle {
		position: relative;
		width: var(--width);
		height: var(--height);
		border-radius: var(--radius);
		border: solid 1px #333;
		transition: background-color 0.3s ease;
	}

	.toggle::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: var(--height);
		width: var(--height);
		border-radius: var(--radius);
		background-color: aliceblue;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}
	input {
		display: none;
	}

	input:checked + .toggle {
		background-color: cyan;
	}

	input:checked + .toggle::after {
		transform: translate3d(100%, 0, 0);
	}
</style>
