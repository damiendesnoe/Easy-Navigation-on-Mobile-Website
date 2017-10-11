(function () {
	document.getElementById("nav-toggle").addEventListener("click", showHideMenu);

	function showHideMenu() {
		document.body.classList.toggle("menu-active");
		document.getElementById("mobile-nav").classList.toggle("active");
		document.getElementById("nav-toggle").classList.toggle("active");

		if(!document.body.classList.contains("menu-active")) {
			document.getElementsByTagName("header")[0].style.position = "fixed";
			document.body.style.paddingTop = "58px";
			setTimeout(function () {
				document.getElementsByTagName("header")[0].removeAttribute("style");
				document.body.removeAttribute("style");
			}, 100);
		}
	}
})();
