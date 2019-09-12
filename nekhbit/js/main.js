$(function($) {

  "use strict";

  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

/*=========================== preloader ===========================*/





var owls = $("#testimonials_owl_slider");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:6000,
        smartSpeed:1000,
        autoplayHoverPause:true,
        items: 4,
        loop: true,
        center: false,
        margin: 15,
        stagePadding: 0,
        dots:false,
        nav:false,

        merge: false,
        mergeFit: true,
        autoWidth: false,
         responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },

        992:{
            items:4,
        },
    }
    

  });


 /*=========================== popup image ===========================*/




});

