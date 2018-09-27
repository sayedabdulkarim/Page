jQuery(document).ready(function($) {

  $('.hamburger-menu').click(function() {
    $('.navigation').toggleClass('change')
  });

  lightbox.option({
    'wrapAround': true
  });

  $(window).scroll(function() {
    var position = $(this).scrollTop();
    if (position >= 350) {
      $('.gallery').addClass('change')
    } else if (position < 350) {
      $('.gallery').removeClass('change')
    }
  });

});