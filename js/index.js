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

<<<<<<< HEAD
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
=======
});

>>>>>>> 1f88f3d47ec0d0c4e6e14de9d4a77a6547d27121
