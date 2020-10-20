$(function() {
  $('.test').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $('.test').addClass('animated fadeInUp');
    } else {
    //表示領域から出た時
      $('.test').removeClass('animated fadeInUp');
      //非表示にしておく
      // $('.test').css('opacity',0);
    }
  });
});