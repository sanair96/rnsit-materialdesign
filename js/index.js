$(document).ready(function(){
	  $(".button-collapse").sideNav({
	  	menuWidth:300,
	  	edge:'left',
	  	closeOnClick:false,
	  	draggable:true});
	  $(".dropdown-button").dropdown();
      $(".dropNav").click(function(){
      	$(".innerNav").toggleClass("hidden");
      });
      
      var currPage = 'mainpage';
});