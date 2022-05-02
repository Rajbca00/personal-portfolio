var nav_links = document.querySelectorAll(".links ul li");

nav_links.forEach((link,index)=>{
    link.addEventListener("click",(event)=>{
        document.querySelectorAll(".active").forEach((activeLink)=>{
            activeLink.classList.remove("active");
        })
        event.target.parentElement.classList.add("active");
    })
});