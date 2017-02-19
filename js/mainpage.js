$(document).ready(function(){

    // $('.carousel').carousel();
      $('.slider').slider({full_width: true});
      	  	$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
     	  	$('.dropdown-button').on('mouseleave',function(){
     	  		  		$('#dropdown1').removeClass('active');
	  		$('#dropdown2').removeClass('active');
	  	});

$('.map-container').click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});


$(window).resize(function(){
  $('.chairman').height($('.director').height()); 
});

});