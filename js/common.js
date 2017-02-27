$(window).scroll(function (event) {
    topup = $(document).scrollTop();
    if(($(window).height()-90) < topup)
    {
      $('nav').removeClass('nav');
      $('.brand-logo').removeClass('hidden');
      $('.svg-logo').removeClass('hidden');
    }
    else{
      $('nav').addClass('nav');
      $('.brand-logo').addClass('hidden');
      $('.svg-logo').addClass('hidden');
    }
});
