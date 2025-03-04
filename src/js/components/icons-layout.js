document.addEventListener('DOMContentLoaded', () => {
	const svgs = document.querySelectorAll('.icon--svg-header');

	svgs.forEach(svg => {
		svg.classList.add('animate');
	});
	const icons = document.querySelectorAll('.icon--svg-special');
	let animatedIcons = new Set();

	window.addEventListener('scroll', () => {
		icons.forEach((icon, index) => {
			if (animatedIcons.has(index)) return;

			const rect = icon.getBoundingClientRect();
			if (rect.top < window.innerHeight && rect.bottom > 0) {
				icon.classList.add('is-visible');
				animatedIcons.add(index);
			}
		});
	});
});
