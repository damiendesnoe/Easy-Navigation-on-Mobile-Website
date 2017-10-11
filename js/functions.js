(function () {
	document.getElementById("nav-toggle").addEventListener("click", showHideMenu);

	function showHideMenu() {
		document.body.classList.toggle("menu-active");
		document.getElementById("mobile-nav").classList.toggle("active");
		document.getElementById("nav-toggle").classList.toggle("active");

		if(!document.getElementById("mobile-nav").classList.contains("active")) {
			document.body.classList.toggle("menu-active");
			if (window.scrollY > 60) {
				document.getElementsByTagName("header")[0].style.top = "-100%";
			}
			setTimeout(function () {
				document.body.classList.toggle("menu-active");
				document.getElementsByTagName("header")[0].removeAttribute("style");
			}, 500);
		}
	}
})();
