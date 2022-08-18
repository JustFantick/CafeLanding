//Разрешение на WEBp
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

document.addEventListener('DOMContentLoaded', function () {
	//Элементам с классом ibg добавляет картинку внутри блока в bg-image
	function ibg() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
	ibg();

	//Смена языка при нажатии на кнопочки
	@@include('lang.js');

	let languagesBlock = document.querySelector('.header__languages');
	let languages = document.querySelectorAll('.header__languages > li');
	function changeLang(langBlock) {
		let lang = langBlock.innerHTML;
		for (const key in langsArray) {
			let items = document.querySelectorAll(key);
			for (const item of items) {
				if (item.placeholder) {
					item.placeholder = langsArray[key][lang];
				} else {
					item.innerHTML = langsArray[key][lang];
				}
			}
		}
	}

	languagesBlock.addEventListener('click', function (e) {
		let target = e.target.closest('li');
		if (!target) return;

		for (const lang of languages) {
			lang.classList.remove('active');
		}
		target.classList.add('active');
		changeLang(target);
	});


	function buttonAnim() {
		const buttons = document.querySelectorAll('.btns-parent');
		for (const button of buttons) {
			button.addEventListener('mouseover', function (event) {
				let target = event.target.closest('.button');
				if (!target) return;

				let children = button.children;
				for (const child of children) {
					child.classList.remove('active');
				}
				target.classList.add('active');
			})
		}
	}
	buttonAnim();

	@@include('_anchors.js');
	@@include('_menuBurger.js');


	//Простенькая валидация полей формы
	let formBtn = document.querySelector('form button');
	let form = document.querySelector('form');
	formBtn.addEventListener('click', formSend);

	function formSend(event) {
		event.preventDefault();
		let error = formValidate(form);
		if (error === 0) {
			//при успешной проверке полей нужно шото делать 
			alert('Все поля в форме написаны правильно')
		}
	}

	function formValidate(form) {
		let error = 0;
		// "_req" - поля обязательные для ввода
		let formReq = document.querySelectorAll('._req');
		for (const elem of formReq) {
			const input = elem;
			formRemoveError(input);

			//валидация Имэйла, должен иметь '_email';
			if (input.classList.contains('_email')) {
				if (emailTest(input) && phoneTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			}
			else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	function phoneTest(input) {
		return !/^\d[\d\(\)\ -]{4,14}\d$/.test(input.value);
	}
})

