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

      	$('#filler').load(dateOfArrival+'.html');
      	$('footer').css({"bottom":"0"});
      	$('.button-collapse').sideNav('hide');
      };



      //For notofications
 if (!('Notification' in window)) {
  console.log('This browser does not support notifications!');
  return;
}
Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});     

displayNotification = function(){

if (Notification.permission == 'granted') {
  navigator.serviceWorker.getRegistration().then(function(reg) {

    // TODO 2.4 - Add 'options' object to configure the notification
    var options = {
  body: 'Notifications!!! Cool no??',
  icon: 'images/logo.png',
  vibrate: [100, 50, 100],
  data: {
    dateOfArrival: Date.now(),
    primaryKey: 1
  },

  // TODO 2.5 - add actions to the notification

  // TODO 5.1 - add a tag to the notification

};


    reg.showNotification('RNSIT',options);
  });
}
};

displayNotification();

});


