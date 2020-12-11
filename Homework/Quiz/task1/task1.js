function chackValidation() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let fname = document.getElementById("fname").value;

  if (!email) {
    document.getElementById("emailMis").innerHTML = "This field is required";
  } else {
    document.getElementById("emailMis").innerHTML = "";
  }
  if (!password) {
    document.getElementById("passMis").innerHTML = "This field is required";
  } else {
    document.getElementById("passMis").innerHTML = "";
  }
  if (!fname) {
    document.getElementById("fnameMis").innerHTML = "This field is required";
  } else {
    document.getElementById("fnameMis").innerHTML = "";
  }
}
