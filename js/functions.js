(function () {
	document.getElementById("nav-toggle").addEventListener("click", showHideMenu);

	function showHideMenu() {
		document.getElementById("mobile-nav").classList.toggle("active");
		document.getElementById("nav-toggle").classList.toggle("active");

		if (window.innerWidth < 1024) {
			document.body.classList.toggle("menu-active");
		} else {
			if(!document.body.classList.contains("menu-active")) {
				document.body.classList.toggle("menu-active");
			} else {

				document.getElementById("wrapper").style.transform = "initial";

				setTimeout(function () {
					document.body.classList.toggle("menu-active");
					document.getElementById("wrapper").removeAttribute("style");
				}, 500);
			}
		}
	}
})();
