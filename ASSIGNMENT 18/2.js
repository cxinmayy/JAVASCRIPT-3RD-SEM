function abc() {
  var uss1 = document.getElementById("us1");
  var pss1 = document.getElementById("ps1");
  //regular expression terms defination
  var capARegex = /[A-Z]+/; //In regular expression plus symbol denotes 1 or many, star symbol mean 0 or many
  var smallARegex = /[a-z]+/;
  var numRegex = /[0-9]+/;
  var specialRegex = /\W+/;

  var uflag = 0,
    pflag = 0;
  if (
    uss1.value.match(capARegex) &&
    uss1.value.match(smallARegex) &&
    uss1.value.match(numRegex)
  ) {
    uflag = 1; //all ok for user
  }
  if (
    pss1.value.match(capARegex) &&
    pss1.value.match(smallARegex) &&
    pss1.value.match(specialRegex) &&
    pss1.value.match(numRegex)
  ) {
    if (pss1.value.length >= 8 && pss1.value.length <= 15) {
      pflag = 1; //al ok for password
    } else {
      alert("Password length should be between 8 to 15");
      pss1.focus();
      return false;
    }
  }
  if (uflag == 0 || pflag == 0) {
    if (uflag == 0) {
      alert("please fill correct username");
      uss1.value = ""; //optional
      uss1.focus();
      return false;
    } else {
      alert("please fill correct password");
      pss1.value = ""; //optional
      pss1.focus();
      return false;
    }
  } else {
    return true;
  }
}
//hey wizard
