$(document).ready(function(){



          // $('.carousel').carousel();
      $('.slider').slider({full_width: true});
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
$('.map-container').click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});


$(window).resize(function(){
  $('.chairman').height($('.director').height()); 
});






	  $(".button-collapse").sideNav({
	  	menuWidth:300,
	  	edge:'left',
	  	closeOnClick:false,
	  	draggable:true});
      if(localStorage.getItem('visit')===null){
        localStorage.setItem('visit',10);
        Materialize.toast('Allow notifications and add to home screen for the best experience', 4000);
      }
	  	$(".innerNav").slideUp("fast");
	  	sessionStorage.setItem('slide',1);

     $(".innerNav1").slideUp("fast");
      sessionStorage.setItem('slide',1);


     
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
            if(sessionStorage.getItem('currentpage') === null ){
                  sessionStorage.setItem('currentpage','home')
            }
            firstthing = sessionStorage.getItem('currentpage');
            console.log(firstthing);
            $('#filler').load(firstthing+'.html');

      $(".dropNav").click(function(){
      		// alert('hi');
      				if(sessionStorage.getItem('slide') == 0){
      					$(".innerNav").slideUp(300);
      					sessionStorage.setItem('slide',1);				
      				}
      				else{
      				sessionStorage.setItem('slide',0);
      				$(".innerNav").slideDown("fast");
      			}
          });
      $(".dropNav1").click(function(){
          // alert('hi');
              if(sessionStorage.getItem('slide1') == 0){
                $(".innerNav1").slideUp(300);
                sessionStorage.setItem('slide1',1);        
              }
              else{
              sessionStorage.setItem('slide1',0);
              $(".innerNav1").slideDown("fast");

}
      });


      navig = function(data){
        sessionStorage.setItem('currentpage',data);
        $('#filler').load(data+'.html');
        $('footer').css({"bottom":"0"});
      }

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
    primaryKey: 1
  },

  // TODO 2.5 - add actions to the notification

  // TODO 5.1 - add a tag to the notification

};


    reg.showNotification('RNSIT',options);
  });
}
};
//call this function when nitifications needed
//displayNotification();
});
