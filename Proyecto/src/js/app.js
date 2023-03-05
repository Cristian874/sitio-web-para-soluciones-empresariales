$(document).ready(function(){
    $(".header__menu").on("click", function(){
     $("nav").slideToggle();

        
    });
});


/* swipperJs */
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //navegacion fija
  document.addEventListener('DOMContentLoaded', function(){

    iniciarApp()
  })


function iniciarApp(){
    navegacionFija();

}


