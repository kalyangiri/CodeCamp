function validateForm() {
  var fullName = document.getElementById("fullname").value;
  var userName = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (fullName === "" || userName === "" || email === "" || password === ""){
    alert("ola ola gayo khola");
    return flase;
  }else if (password.length < 6) {
    alert ("choto vo");
    return false;
  } else {
    return true;
  }
 }
