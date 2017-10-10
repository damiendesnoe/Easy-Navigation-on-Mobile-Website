(function () {
	document.getElementById("nav-toggle").addEventListener("click", showHideMenu);

	function showHideMenu() {
		document.body.classList.toggle("menu-active");
		document.getElementById("mobile-nav").classList.toggle("active");
		document.getElementById("nav-toggle").classList.toggle("active");
	}
})();
