<script>
	import Portal from '../Portal.svelte';
	import { toast } from './toast';
</script>

<Portal>
	<div class="toast-wrapper">
		{#each $toast as message}
			<div class="toast">
				<p>{message}</p>
			</div>
		{/each}
	</div>
</Portal>

<style>
	.toast-wrapper {
		position: fixed;
		bottom: 0;
		right: 20px;
	}

	.toast {
		margin-bottom: 1rem;
		padding: 20px;
		border-radius: 15px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
	}

	p {
		margin: 0;
	}
</style>
