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



// ========================================
// ================ Form ==================
const form = document.getElementById("form");
const formalert = document.getElementById("formalert");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    var services=[], name, email, phone, description;
    name = document.getElementsByName('name')[0];
    email = document.getElementsByName('email')[0];
    phone = document.getElementsByName('phone')[0];
    description = document.getElementsByName('description')[0];
    services[0] = document.getElementsByName('services')[0];
    services[1] = document.getElementsByName('services')[1];
    services[2] = document.getElementsByName('services')[2];
    services[3] = document.getElementsByName('services')[3];
    services[4] = document.getElementsByName('services')[4];
    services[5] = document.getElementsByName('services')[5];
    console.log(email);


    if(name.value == ""){
        formalert.innerText = "Name field is empty.";
        if(formalert.classList.contains("success")){
            formalert.classList.remove('success');
        }
        if(!formalert.classList.contains("error")){
            formalert.classList.add('error');
        }
    }else if(email.value == ""){
        formalert.innerText = "E-mail field is empty.";
        if(formalert.classList.contains("success")){
            formalert.classList.remove('success');
        }
        if(!formalert.classList.contains("error")){
            formalert.classList.add('error');
        }
    }else if(phone.value == ""){
        formalert.innerText = "Phone Number field is empty.";
        if(formalert.classList.contains("success")){
            formalert.classList.remove('success');
        }
        if(!formalert.classList.contains("error")){
            formalert.classList.add('error');
        }
    }else if(description.value == ""){
        formalert.innerText = "Description field is empty.";
        if(formalert.classList.contains("success")){
            formalert.classList.remove('success');
        }
        if(!formalert.classList.contains("error")){
            formalert.classList.add('error');
        }
    }else{
        formalert.innerText = "You can reach us anytime via hi@untitledui.com";
        if(formalert.classList.contains("error")){
            formalert.classList.remove('error');
        }
        if(formalert.classList.contains("success")){
            formalert.classList.remove('success');
        }

        let NAME, EMAIL, PHONE, DESCRIPTION, SERVICES=[], DATA={};

        NAME = name.value;
        EMAIL = email.value;
        PHONE = phone.value;
        DESCRIPTION = description.value;
        services.forEach(element => {
            if(element.checked){
                SERVICES.push(element.value);
            }
        });
        // console.log(SERVICES);
        DATA = {"name":NAME, "email":EMAIL, "phone":PHONE, "description":DESCRIPTION, "services":SERVICES}
        console.log(DATA);
    }

})

// ========================================
