function abc() {
    var f1 = document.getElementById("img1");
    var imgUrl = URL.createObjectURL(f1.files[0]);

    var d1 = document.getElementById("div1");
    d1.innerHTML = "";

    var img111 = document.createElement("img");
    img111.src = imgUrl;
    img111.height = 300;
    img111.width = 200;

    d1.appendChild(img111);
}