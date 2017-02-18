$(document).ready(function(){
	  $(".button-collapse").sideNav({
	  	menuWidth:300,
	  	edge:'left',
	  	closeOnClick:false,
	  	draggable:true});
	  

        
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


      $(".dropNav").click(function(){
      	$(".innerNav").toggleClass("hidden");
      });
      currPage = 'mainpage';
     
      navig = function(data){
      	currPage= data;
      	console.log(currPage);
      	$('#filler').load(data+'.html');
      	$('footer').css({"bottom":"0"});
      }


      $(".")

});


