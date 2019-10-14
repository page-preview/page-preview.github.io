$(function($) {

  "use strict";

  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

/*=========================== preloader ===========================*/

  $('body').scrollspy({target: ".rightAreaBanner", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });


$('#bannerSliderOwl').owlCarousel({
  autoplay:true,
autoplayTimeout:3000,
        items:1,
        merge:true,
        loop:true,
        margin:0,
        video:true,
        lazyLoad:true,
        center:false,
        nav:false,
        smartSpeed:1600,
    })


$('#slider-1-owl').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:0,
        video:true,
        lazyLoad:true,
        center:false,
        nav:true,
        smartSpeed:1400,
    })


$('#owl_slider2').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:0,
        video:true,
        lazyLoad:true,
        center:false,
        nav:true,
        smartSpeed:1400,
    })




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

