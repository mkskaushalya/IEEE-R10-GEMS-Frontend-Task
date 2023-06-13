const hamb = document.querySelector(".hamburger");
const menubar = document.querySelector("#menubar");
const navlinks = document.querySelectorAll(".navlink");
const navactive = document.querySelector("#navactive");
navactive.addEventListener("click", () => {
    if( hamb.classList.contains("active")){
        hamb.classList.remove('active');
    }
    if( menubar.classList.contains("active")){
        menubar.classList.remove('active');
    }
    navactive.classList.remove('active');
    document.querySelector('.navlink.active')?.classList.remove('active');

})
hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    menubar.classList.toggle("active");
    if(hamb.classList.contains("active")){
        if(!navactive.classList.contains("active")){
            navactive.classList.add('active');
        }
    }else{
        navactive.classList.remove('active');
    }
    
});

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


navlinks.forEach(navlink => {
    navlink.addEventListener("click", () => {
        // document.querySelector(".navlink.active")
        if(navlink.classList.contains("active")){
            document.querySelector('.navlink.active')?.classList.remove('active');
            // navlink.classList.remove('active')
            if(navactive.classList.contains("active" && !hamb.classList.contains("active"))){
                navactive.classList.remove('active');
            }
        }else{
            document.querySelector('.navlink.active')?.classList.remove('active');
            navlink.classList.add("active");
            if(!navactive.classList.contains("active")){
                navactive.classList.add('active');
                if(navactive.classList.contains("active" && !hamb.classList.contains("active"))){
                    navactive.classList.remove('active');
                }
            }
        }
    })
    navlink.addEventListener("mouseover", () => {
        if(!navactive.classList.contains("active")){
            navactive.classList.add('active');
        }
        // document.querySelector('.active')?.classList.remove('active');
        // document.querySelector(".navlink.active")
        // if(navlink.classList.contains("active")){
        //     document.querySelector('.active')?.classList.remove('active');
        //     // navlink.classList.remove('active')
        // }else{

        //     document.querySelector('.active')?.classList.remove('active');
        //     navlink.classList.add("active");
        // }
    })
    navlink.addEventListener("mouseleave", () => {
        document.querySelector('.navlink.active')?.classList.remove('active');
        if(navactive.classList.contains("active") && !hamb.classList.contains("active")){
            navactive.classList.remove('active');
        }
    })
})