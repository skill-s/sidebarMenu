

var toggle = document.getElementById("toggle-menu");
var body = document.getElementsByTagName("body")[0];

toggle.addEventListener('click', function () {
	collapsed = this;

	if (!collapsed.classList.contains('active') && !body.classList.contains("unpin")) {
		collapsed.classList.add('active');
		body.classList.add("unpin");
		body.classList.remove("pin");
	} else {
		collapsed.classList.remove('active');
		body.classList.add("pin");
		body.classList.remove("unpin");
	}
}) ;

var btnProfile = document.getElementById("set");
btnProfile.addEventListener("click", function () {
	var dropdown = document.getElementsByClassName("dropdown")[0];
	if (!dropdown.classList.contains("show")) {
		dropdown.classList.add("show");
	} else {
		dropdown.classList.remove("show");
	}
})

let btn = document.getElementById("bx-dots");
btn.addEventListener('click', function () {
	var dropdown = document.getElementsByClassName("dropdown")[0];
	if (!dropdown.classList.contains("show")) {
		dropdown.classList.add("show");
	} else {
		dropdown.classList.remove("show");
	}
})

let sidebarLink = document.querySelectorAll(".sidebar-link");
for (var i = 0; i <= sidebarLink.length; i++) {
	sidebarLink[i].addEventListener('click', function () {
		current = document.getElementsByClassName('active');

		if (current.length > 1) {
			current[1].className = current[1].className.replace(" active", "");
		} else {
			current[0].className = current[0].className.replace(" active", "");
		}

		this.className += " active";
	})
}
