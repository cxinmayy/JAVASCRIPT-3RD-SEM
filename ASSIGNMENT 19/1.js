var ps1 = document.getElementById("ps");
var btn1 = document.getElementById("btn");

var hidebtn = document.createElement("i");
// hidebtn.class="fa fa-eye";
hidebtn.setAttribute("class", "fa fa-eye");
hidebtn.onclick = abc;
function abc() {
  if (ps1.type == "password") {
    ps1.type = "text";
    btn1.replaceWith(hidebtn);
  } else {
    ps1.type = "password";
    hidebtn.replaceWith(btn1);
  }
}
