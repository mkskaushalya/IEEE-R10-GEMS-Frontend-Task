const hamb = document.querySelector(".hamburger");
const menubar = document.querySelector("#menubar");
hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    menubar.classList.toggle("active");
});

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const navlinks = document.querySelectorAll(".navlink");
navlinks.forEach(navlink => {
    navlink.addEventListener("click", () => {
        // document.querySelector(".navlink.active")
        if(navlink.classList.contains("active")){
            document.querySelector('.navlink.active')?.classList.remove('active');
            // navlink.classList.remove('active')
        }else{

            document.querySelector('.navlink.active')?.classList.remove('active');
            navlink.classList.add("active");
        }
    })
    // navlink.addEventListener("mouseover", () => {
    //     // document.querySelector(".navlink.active")
    //     if(navlink.classList.contains("active")){
    //         document.querySelector('.active')?.classList.remove('active');
    //         // navlink.classList.remove('active')
    //     }else{

    //         document.querySelector('.active')?.classList.remove('active');
    //         navlink.classList.add("active");
    //     }
    // })
    // navlink.addEventListener("mouseleave", () => {
    //     document.querySelector('.active')?.classList.remove('active');
    // })
})