window.onload = loginLoad;
function loginLoad() {
	var GetmyForm = document.getElementById("myLogin");
	GetmyForm.onsubmit = checkLogin;
}

function checkLogin() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const OldUsername = urlParams.get('username');
	const OldPassword = urlParams.get('password');
	var NewUsername = document.forms["myLogin"]["username"].value;
	var NewPassword = document.forms["myLogin"]["password"].value;
	if (OldUsername != NewUsername || OldPassword != NewPassword) {
		alert("Login Failed!");
		return false;
	}
	alert("Login Success!");
}

