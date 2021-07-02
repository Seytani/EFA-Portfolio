let fixedBtn = document.querySelector(".fixed-btn");

fixedBtn.addEventListener("click", goToTop);
window.onscroll = function () {
	scrollFunction();
};

function goToTop(e) {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		fixedBtn.style.display = "block";
	} else {
		fixedBtn.style.display = "none";
	}
}
