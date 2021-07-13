<script>
	import { slide } from './Slide';
	export let buttonText = '';
	export let isOpen = true;
	// https://unicode-table.com/en/25B2/
</script>

<button on:click={() => (isOpen = !isOpen)}>
	<span class:isOpen>▲</span>
	{buttonText}
</button>

<div
	class="accordion-content"
	use:slide={{ isOpen, duration: 200 }}
	on:animationEnd={() => console.log('animation ended')}
>
	<div class="wrapper">
		<slot />
	</div>
</div>
<div
	class="accordion-content"
	use:slide={{ isOpen }}
	on:animationEnd={() => console.log('animation ended')}
>
	<div class="wrapper">
		<slot />
	</div>
</div>

<style>
	.wrapper {
		padding: 20px;
	}

	button {
		display: block;
		border: 0;
		width: 100%;
		text-align: left;
		border: solid 1px #333;
		margin: 0;
	}
	span {
		margin-right: 5px;
		display: inline-block;
		transform: rotate(0.25turn);
		transition: transform 0.3s ease;
	}
	.isOpen {
		transform: rotate(0.5turn);
	}
	.accordion-content {
		border: solid 1px #333;
		border-top: 0;
	}
</style>
