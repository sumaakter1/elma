// nav hide 
let navBar = document.querySelectorAll(".navbar-nav .nav-link");
let navCollapse = document.querySelector(".navbar-collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })


})