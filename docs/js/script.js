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
	const langsArray = {
	".about": {
		"en": "ABOUT",
		"ru": "о нас",
		"esp": "acerca de"
	},
	".menus": {
		"en": "MENUS",
		"ru": "меню",
		"esp": "menús"
	},
	".service-info": {
		"en": "SERVICE INFO",
		"ru": "Cервис",
		"esp": "Servicio"
	},
	".gallery": {
		"en": "GALLERY",
		"ru": "Галерея",
		"esp": "galería"
	},
	".friends": {
		"en": "friends",
		"ru": "друзья",
		"esp": "amigos"
	},
	".contact-menu": {
		"en": "contact",
		"ru": "контакты",
		"esp": "contacto"
	},
	".ordering": {
		"en": "Online ordering",
		"ru": "Заказать онлайн",
		"esp": "Pedidos en línea"
	},
	".private-catering": {
		"en": "Private catering",
		"ru": "Общественное питание",
		"esp": "Catering privado"
	},
	".private-text": {
		"en": "Treat your guests to a beautifully plated dinner, <br> hand-crafted canapes or a casual BBQ.",
		"ru": "Побалуйте своих гостей красиво сервированным ужином, приготовленными вручную канапе или приготовлением барбекю в непринужденной обстановке.",
		"esp": "Mime a sus invitados con una cena bellamente presentada, canapés o barbacoas hechos a mano en un ambiente informal."
	},
	".get-a-quote": {
		"en": "Get a quote",
		"ru": "Заказ",
		"esp": "Ordenar"
	},
	".view-menus": {
		"en": "View menus",
		"ru": "Меню",
		"esp": "ver-menús"
	},
	".corporate-title": {
		"en": "Corporate catering",
		"ru": "Корпоративное питание",
		"esp": "Catering corporativo"
	},
	".corporate-text": {
		"en": "We are able to serve events from 2 to 2000 guests and always reasonable prices.",
		"ru": "Мы можем обслужить мероприятия от 2 до 2000 гостей и всегда по разумным ценам.",
		"esp": "Somos capaces de atender eventos desde 2 hasta 2000 invitados y precios siempre razonables."
	},
	".private-title": {
		"en": "Private catering",
		"ru": "Частное питание",
		"esp": "Catering privado"
	},
	".private-text": {
		"en": "Fresh, seasonal and simple cuisine.Food is our business and our passion",
		"ru": "Свежая, сезонная и простая кухня. Еда - это наш бизнес и наша страсть.",
		"esp": "Cocina fresca, de temporada y sencilla. La comida es nuestro negocio y nuestra pasión."
	},
	".wedding-title": {
		"en": "Wedding catering",
		"ru": "Свадебный стол",
		"esp": "catering de bodas"
	},
	".wedding-text": {
		"en": "We use only the best organic ingredients and gluten and dairy free cooking.",
		"ru": "Мы используем только лучшие ингредиенты, а также готовим без глютена и молочных продуктов.",
		"esp": "Utilizamos solo los mejores ingredientes orgánicos y cocina sin gluten y sin lácteos."
	},
	".ordering-title": {
		"en": "Online ordering",
		"ru": "Онлайн заказ",
		"esp": "pedidos en línea"
	},
	".ordering-text": {
		"en": "Successful catering is about organisation, high quality service, and great food.",
		"ru": "Успешный кейтеринг - это организованность, высокое качество обслуживания и еды.",
		"esp": "El catering exitoso se trata de organización, servicio de alta calidad y buena comida."
	},
	".question": {
		"en": "Why CHOOSE us?",
		"ru": "Почему нас выбрают?",
		"esp": "Por qué elegirnos?"
	},
	".flower-title": {
		"en": "Always fresh",
		"ru": "Всегда свежие",
		"esp": "Siempre fresco"
	},
	".clock-title": {
		"en": "Reliable AND Flawless",
		"ru": "Надежный и безупречный",
		"esp": "Confiable e impecable"
	},
	".list-title": {
		"en": "Clean and Healthy",
		"ru": "Чистая и здоровая",
		"esp": "Limpio y saludable"
	},
	".layer-title": {
		"en": "fits any size and budget",
		"ru": "для любых компаний и бюджета",
		"esp": "se adapta a cualquier tamaño y presupuesto"
	},
	".contact-title": {
		"en": "Say Hello",
		"ru": "Поздоровайтесь",
		"esp": "Di hola"
	},
	".above-form": {
		"en": "Get in touch",
		"ru": "Связаться с нами",
		"esp": "Ponerse en contacto"
	},
	".input-name": {
		"en": "Name",
		"ru": "Имя",
		"esp": "Nombre"
	},
	".input-email": {
		"en": "E-mail or phone number",
		"ru": "E-mail или номер телефона",
		"esp": "Correo electrónico o número de teléfono"
	},
	".input-message": {
		"en": "Enter your message",
		"ru": "Введите ваше сообщение",
		"esp": "Ingrese su mensaje"
	},
	".submit-button": {
		"en": "Send message",
		"ru": "Отправить сообщение",
		"esp": "Enviar mensaje"
	},
};

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

	const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault();

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			setTimeout(function () {
				const blockId = anchor.getAttribute('href');
				if (anchor.innerHTML == 'FRIENDS' || anchor.innerHTML == 'CONTACT') {
					document.querySelector('' + blockId).scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				} else {
					document.querySelector('' + blockId).scrollIntoView({
						behavior: "smooth",
						block: "center",
					});
				}
			}, 700);
		} else {
			const blockId = anchor.getAttribute('href');
			if (anchor.innerHTML == 'FRIENDS' || anchor.innerHTML == 'CONTACT') {
				document.querySelector('' + blockId).scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			} else {
				document.querySelector('' + blockId).scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
			}
		}
	});
};
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
};


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

