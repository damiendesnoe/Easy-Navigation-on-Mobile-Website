(function () {
	document.getElementById("nav-toggle").addEventListener("click", showHideMenu);
	
	function showHideMenu() {
		document.getElementById("mobile-nav").classList.toggle("active");
		console.log("nav’s classList: " + document.getElementById("mobile-nav").classList);
	}
})();