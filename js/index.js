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
      

      navig = function(data){
      	alert(data+'.html');
      	currPage = data;
      	fetch(data+'.html')
      	.then(data=>{
      		return data.text();
      	})
      	.then(text=>{
      		console.log(text);
      		document.getElementById('filler').innerHTML=text;
      	})
      }

});


