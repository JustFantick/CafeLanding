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
}