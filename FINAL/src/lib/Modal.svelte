<script>
	import { fly, fade } from 'svelte/transition';
	import Portal from './Portal.svelte';

	export let isModalOpen = false;

	function closeModal() {
		isModalOpen = false;
	}
</script>

{#if isModalOpen}
	<Portal>
		<div class="modal-wrapper" transition:fly={{ opacity: 0, y: 100 }}>
			<button on:click={closeModal} aria-label="Close Modal Box">Close</button>
			<slot />
		</div>
		<div on:click={closeModal} transition:fade class="background" />
	</Portal>
{/if}

<style>
	.modal-wrapper {
		position: fixed;
		inset: 100px 0 0;
		min-width: 320px;
		max-width: 530px;
		margin: 0 auto;
		width: 100%;
		z-index: 101;
	}

	.background {
		background: black;
		opacity: 0.8;
		cursor: pointer;
		inset: 0;
		position: fixed;
		z-index: 100;
	}
</style>
