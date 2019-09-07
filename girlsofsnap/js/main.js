$(function($) {

  "use strict";

  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

/*=========================== preloader ===========================*/


var owls = $("#blog_hero_sl_owl");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:6000,
        smartSpeed:1000,
        autoplayHoverPause:true,
        items: 1,
        loop: true,
        center: false,
        margin: 0,
        stagePadding: 0,
        dots:true,
        nav:false,

        merge: false,
        mergeFit: true,
        autoWidth: false,

  });


 /*=========================== popup image ===========================*/

//popup gallery
  $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
  });
/*=========================== popup image ===========================*/



});

