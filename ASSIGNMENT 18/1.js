function abc() {
  var uss1 = document.getElementById("us1");
  var pss1 = document.getElementById("ps1");

  if (uss1.value == "") {
    alert("Please enter your username");
    uss1.focus();
    return false;
  } else if (pss1.value == "") {
    alert("please enter your password");
    pss1.focus();
    return false;
  } else {
    alert("Login Sucessful");
    return true;
  }
}
