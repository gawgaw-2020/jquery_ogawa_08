$(function() {
  $('.logo').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $('.logo').addClass('animated rollIn');
    } else {
    //表示領域から出た時
      $('.logo').removeClass('animated rollIn');
    }
  });
  $('.js-fade-in-up').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $('.js-fade-in-up').addClass('animated fadeInUp');
    } else {
    //表示領域から出た時
      $('.js-fade-in-up').removeClass('animated fadeInUp');
    }
  });
  $('.js-pulse').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $('.js-pulse').addClass('animated pulse');
    } else {
    //表示領域から出た時
      $('.js-pulse').removeClass('animated pulse');
    }
  });
  $('#intro-box01').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $('#intro-box01').addClass('animated fadeIn');
    } else {
    //表示領域から出た時
      $('#intro-box01').removeClass('animated fadeIn');
    }
  });
  $('#intro-box02').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $('#intro-box02').addClass('animated fadeIn');
    } else {
    //表示領域から出た時
      $('#intro-box02').removeClass('animated fadeIn');
    }
  });
  
  $('#profile-card__text01').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $('#profile-card__text01').addClass('animated fadeInLeft');
    } else {
    //表示領域から出た時
      $('#profile-card__text01').removeClass('animated fadeInLeft');
    }
  });
  $('#profile-card__text02').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $('#profile-card__text02').addClass('animated fadeInLeft');
    } else {
    //表示領域から出た時
      $('#profile-card__text02').removeClass('animated fadeInLeft');
    }
  });

});