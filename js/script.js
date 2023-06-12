const hamb = document.querySelector(".hamburger");
const menubar = document.querySelector("#menubar");
hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    menubar.classList.toggle("active");
});