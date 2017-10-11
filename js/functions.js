(function () {
	document.getElementById("nav-toggle").addEventListener("click", showHideMenu);

	function showHideMenu() {
		document.getElementById("mobile-nav").classList.toggle("active");
		document.getElementById("nav-toggle").classList.toggle("active");

		if(!document.body.classList.contains("menu-active")) {
			document.body.classList.toggle("menu-active");
		} else {
			document.getElementById("mobile-nav").style.zIndex = "1";

			if (window.scrollY > 60) {
				document.getElementsByTagName("header")[0].style.opacity = "0";
			}

			setTimeout(function () {
				document.body.classList.toggle("menu-active");
				document.getElementById("mobile-nav").removeAttribute("style");
				document.getElementsByTagName("header")[0].removeAttribute("style");
			}, 700);
		}
	}
})();
