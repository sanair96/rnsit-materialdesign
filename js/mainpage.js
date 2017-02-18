(function($){
  $(function(){

    $('.carousel').carousel();
      $('.slider').slider({full_width: true});
     
        
  //  $('.carousel.carousel-slider').carousel({full_width: true});
    //$('.carousel').carousel('set', 4);

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.map-container').click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});


$(window).resize(function(){
  $('.chairman').height($('.director').height()); 
});