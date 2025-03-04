console.log('Welcome to the School Project! Home');
import '../scss/home.scss';

const details = document.querySelectorAll('.question__details');
const list = document.querySelector('.question__list');

details.forEach(detail => {
	detail.addEventListener('toggle', () => {
		detail.parentElement.classList.toggle('open', detail.open);
	});
});
