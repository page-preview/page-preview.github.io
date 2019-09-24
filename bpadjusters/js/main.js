$(function($) {

  "use strict";

  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

/*=========================== preloader ===========================*/


var owls = $("#blog_slider_owl");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        items: 3,
        smartSpeed:1400,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots:false,
        nav:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1100: {
                items: 3,
                loop: true
            }
        },
         navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]

    });




});

