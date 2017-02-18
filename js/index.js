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
            if(sessionStorage.getItem('currentpage') === null ){
                  sessionStorage.setItem('currentpage','home')
            }
            firstthing = sessionStorage.getItem('currentpage');
            console.log(firstthing);
            $('#filler').load(firstthing+'.html');

      $(".dropNav").click(function(){
      	$(".innerNav").toggleClass("hidden");
      });
      navig = function(data){
            sessionStorage.setItem('currentpage',data);
      	$('#filler').load(data+'.html');
      	$('footer').css({"bottom":"0"});
      }
});


