export function slide(node, isOpen) {
	// Initialize
	let initialHeight = node.offsetHeight;
	let initialState = isOpen;
	node.style.overflow = 'hidden';
	node.style.height = isOpen ? 'auto' : '0';

	return {
		update(isOpen) {
			let animation = node.animate(
				[
					{
						height: initialHeight + 'px',
						overflow: 'hidden'
					},
					{
						height: 0,
						overflow: 'hidden'
					}
				],
				{
					duration: 300,
					fill: 'both'
				}
			);
			animation.pause();
			console.log('isOpen', isOpen);
			if (!isOpen) {
				animation.play();
			} else {
				animation.reverse();
			}
		}
	};
}
// export function slide(node, isOpen) {
// 	// Initialize
// 	let initialHeight = node.offsetHeight;
// 	let initialState = isOpen;

// 	return {
// 		update(isOpen) {
// 			let animation = node.animate(
// 				[
// 					{
// 						height: initialHeight + 'px',
// 						overflow: 'hidden'
// 					},
// 					{
// 						height: 0,
// 						overflow: 'hidden'
// 					}
// 				],
// 				{
// 					duration: 300,
// 					fill: 'both'
// 				}
// 			);
// 			animation.pause();
// 			if (isOpen !== initialState) {
// 				animation.play();
// 			} else {
// 				animation.reverse();
// 			}
// 		}
// 	};
// }
