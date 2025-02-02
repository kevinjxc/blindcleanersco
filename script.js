//Hamburger Variables Created
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

//Event Listener for Hamburger Created
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

//Lists Items in Hamburger
document.querySelectorAll(".item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))

//Checks for Safari
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

//Adds Indent to Safari
if (isSafari()) {
  var indent1 = document.getElementById("indent1");
  indent1.innerHTML = "<br>";

  var indent2 = document.getElementById("indent2");
  indent2.innerHTML = "<br>";

  var indent3 = document.getElementById("indent3");
  indent3.innerHTML = "<br>";
}
