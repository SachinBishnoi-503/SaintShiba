let menuicon = document.querySelector(".menubar");
let menulist = document.querySelector(".navbar-iteams");
var body = document.querySelector(".body");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    body.classList.toggle("overflow-lg-hidden")
})