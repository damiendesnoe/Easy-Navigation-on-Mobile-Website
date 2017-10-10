(function () {
	document.getElementById("nav-toggle").addEventListener("click", showHideMenu);
	
	function showHideMenu() {
		var navE = document.getElementById("mobile-nav");
		
		document.getElementById("nav-toggle").classList.toggle("active");
		navE.classList.toggle("active");
			
		if (!navE.classList.contains("active")) {
			var aEl = document.getElementsByTagName("a");
			var liE = document.getElementsByTagName("li");
			for (var i = 0; i < aEl.length; i++) {
				aEl[i].style.display = "block";
				aEl[i].style.textTransform = "uppercase";
				liE[i].style.display = "block";
			}
			setTimeout(function () {
				for (var i = 0; i < aEl.length; i++) {
					aEl[i].removeAttribute("style");
					liE[i].removeAttribute("style");
				}
			}, 500);
		}
	}
})();