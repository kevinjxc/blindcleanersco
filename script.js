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


//Redirects to About Page
function pageAbout() {
    window.location.href = "about.html";
}

//Redirects to Services Page
function pageServices() {
    window.location.href = "services.html";
}

//Redirects to Methods Page
function pageMethods() {
    window.location.href = "methods.html";
}

//Redirects to Coupons Page
function pageCoupons() {
    window.location.href = "contact.html";
}

//Redirects to Jobs Page
function pageJobs() {
    window.location.href = "jobs.html";
}
//Redirects to Contact Page
function pageContact() {
    window.location.href = "contact.html";
}

//Redirects to Email
function pageEmail() {
    window.location.href = "mailto:blindcleanersco.com";
}

//Redirects to Phone Number
function pagePhone() {
    window.location.href = "tel:+12066591265";
}

//Redirects to Seattle Map
function pageLocation() {
    window.open("https://www.google.com/maps/place/Seattle,+WA");
}
