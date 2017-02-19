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
      	console.log(sessionStorage.getItem('currentpage'));
      	$('#filler').load(data+'.html');
      	$('footer').css({"bottom":"0"});
      }