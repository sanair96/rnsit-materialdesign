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
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );

      $(".dropNav").click(function(){
      	$(".innerNav").toggleClass("hidden");
      });
      currPage = 'mainpage';
     $('#filler').load('home.html');

      navig = function(data){
      	currPage= data;

sessionStorage.setItem('1', currPage);

var pageData = sessionStorage.getItem('1');
      	console.log(pageData);
      	$('#filler').load(pageData+'.html');
      	$('footer').css({"bottom":"0"});
      	$('.button-collapse').sideNav('hide');
      }
      

});


