(function () {
	document.getElementById("nav-toggle").addEventListener("click", showHideMenu);

	function showHideMenu() {
		document.getElementById("mobile-nav").classList.toggle("active");
		document.getElementById("nav-toggle").classList.toggle("active");

		if(!document.body.classList.contains("menu-active")) {
			document.body.classList.toggle("menu-active");
		} else {
			if (window.scrollY > 60) {
				document.getElementsByTagName("header")[0].style.top = "-100%";
			}

			document.getElementById("wrapper").style.margin = "20px 200px";

			setTimeout(function () {
				document.body.classList.toggle("menu-active");
				document.getElementsByTagName("header")[0].removeAttribute("style");
				document.getElementById("wrapper").removeAttribute("style");
			}, 500);
		}
	}
})();
