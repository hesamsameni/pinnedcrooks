$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform': 'translate(0px , ' + wScroll / 2 + '%)'
  });


});


$(function() {
  var numHeaders = 3;
  var poster = 0;
  setInterval(function() {
    poster++;
    if (poster > numHeaders) {
      poster = 1;
    }
    $('.event-wrap').css('background-image', 'url(assets/img/poster' + poster + '.jpg)').css('background-size', 'contain').css('margin', '40px auto');

  }, 7000);
});
