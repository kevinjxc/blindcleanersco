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