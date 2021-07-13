import { writable } from 'svelte/store';

// Custom store
const newToast = () => {
	const { subscribe, update } = writable([]);

	function send(message, { duration = 2000, type = 'INFO' } = {}) {
		const id = Math.floor(Math.random() * 1000);
		const newMessage = {
			id,
			duration,
			type,
			message
		};
		update((store) => [...store, newMessage]);
	}

	function remove(id) {
		update((store) => {
			let newStore = store.filter((item) => item.id !== id);
			return [...newStore];
		});
	}

	return { subscribe, send, remove };
};

export const toast = newToast();
