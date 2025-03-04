console.log('Welcome to the School Project! Contact');
import '../scss/contact.scss';

const choose = selector => document.querySelector(selector);
function setLocalDataByKey(key, value) {
	const jsonData = JSON.stringify(value);
	localStorage.setItem(key, jsonData);
}
function getLocalDataByKey(key) {
	const body = localStorage.getItem(key);
	try {
		const data = body ? JSON.parse(body) : null;
		return data;
	} catch {
		return body;
	}
}
const form = {
	key: 'registrationData',
	reg: choose('#registration-form'),
	parentName: choose('#parent-name'),
	email: choose('#email'),
	phone: choose('#tel'),
	studentName: choose('#student-name'),
	studentAge: choose('#student-age'),
	program: choose('#choices'),
	message: choose('#message'),
};

let formData = {};
let savedData = getLocalDataByKey(form.key) || '';

function updateFormFields(form, savedData, formData) {
	Object.keys(form)
		.filter(key => key !== 'key' && key !== 'reg')
		.forEach(key => {
			if (form[key]?.value !== undefined) {
				form[key].value = savedData[key] || '';
				formData[key] = savedData[key] || '';
			}
		});
}
updateFormFields(form, savedData, formData);

form.reg.addEventListener('input', event => {
	Object.keys(form)
		.filter(key => key !== 'key' && key !== 'reg')
		.forEach(key => {
			if (form[key]?.value !== undefined) {
				formData[key] = form[key].value.trim();
				setLocalDataByKey(form.key, formData);
			}
		});
});

form.reg.addEventListener('submit', event => {
	event.preventDefault();
	localStorage.removeItem(form.key);
	form.reg.reset();
});
