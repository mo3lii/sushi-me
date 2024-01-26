var navbar = document.getElementById("nav-bar");
var logoImg = document.querySelector(".navbar img");
document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 3) {
    navbar.style.backgroundColor = "black";
    logoImg.style.height = "50px";
  } else {
    navbar.style.backgroundColor = "#e7272d";
    logoImg.style.height = "60px";
  }
});
