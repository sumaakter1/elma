//  header scroll 
// let nav = document.querySelector(".navbar");
// window.onscroll = function(){
//     if(document.documentElement.scrolled > 20){
//         nav.classList.add("header-scrolled");
//     }else{
//         nav.classList.remove("header-scrolled")
//         }
//     }
// nav hide 
let navBar = document.querySelectorAll(".navbar-nav .nav-link");
let navCollapse = document.querySelector(".navbar-collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })


})