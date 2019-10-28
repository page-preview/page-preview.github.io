$(function($) {

  "use strict";

  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

/*=========================== preloader ===========================*/


$('#memeber_sliderOwl').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:0,
        video:true,
        lazyLoad:true,
        center:false,
        nav:true,
        smartSpeed:1400,
        navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
    })


  $('body').scrollspy({target: ".scrollDown", offset: 50});   

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

  
 $('.counter').counterUp({
        delay: 4,
        time: 4000
    });

});

