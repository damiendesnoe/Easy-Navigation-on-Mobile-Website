(function () {
	document.getElementById("nav-toggle").addEventListener("click", showHideMenu);

	function showHideMenu() {
		document.getElementsByTagName("html")[0].classList.toggle("menu-active");
		document.getElementById("mobile-nav").classList.toggle("active");
		document.getElementById("nav-toggle").classList.toggle("active");
	}
})();
