//При клике на icon бургера +класс для иконки и body выезжающего меню
const iconMenu = document.querySelector('.burger-icon');
const menuBody = document.querySelector('.header__btm');
function toggleMenuClases() {
	iconMenu.classList.toggle('_active');
	menuBody.classList.toggle('_active');
	document.body.classList.toggle('_lock');
}
if (window.getComputedStyle(iconMenu).display == 'block') {
	iconMenu.addEventListener('click', toggleMenuClases);
	menuBody.addEventListener('click', function (event) {
		let target = event.target.closest('li');
		if (!target) return;
		toggleMenuClases();
	});
}