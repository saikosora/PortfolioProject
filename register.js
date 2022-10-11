window.onload = pageLoad;
function pageLoad() {
    var GetmyForm = document.getElementById("myForm");
    GetmyForm.onsubmit = validateForm;
}

function validateForm() {
    var Password = [] = document.forms["myForm"]["password"];
    var Error = document.getElementById("errormsg");
    if (Password[0].value != Password[1].value) {
        Error.innerHTML = "Error404";
        return false;
    }
}