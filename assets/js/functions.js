$( document ).ready(function() {

  // Get started!

  //Zoom-in effect on the header when loading the page
  $('header').animate({
      'background-size' : '120%'
  });

  //Scrollspy, smooth scrolling experience with the navbar
  $(function(){
    $('li > a').on('click', function(e){
      e.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop : $(this.hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    });
  });

  //Carousel interval setting
  $('.carousel').carousel({
      interval: 6000
  });


});
