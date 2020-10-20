$(function() {
  // 各要素がInViewしたら各要素にanimateCSSを適用

  // ロゴ
  $('.logo').on('inview', function(event, isInView) {
    if (isInView) {
      $('.logo').addClass('animated rollIn');
    } else {
      $('.logo').removeClass('animated rollIn');
    }
  });

  // 各セクション
  $('.js-fade-in-up').on('inview', function(event, isInView) {
    if (isInView) {
      $('.js-fade-in-up').addClass('animated fadeInUp');
    } else {
      $('.js-fade-in-up').removeClass('animated fadeInUp');
    }
  });

  // 商品ページの中間イメージ
  $('.js-pulse').on('inview', function(event, isInView) {
    if (isInView) {
      $('.js-pulse').addClass('animated pulse');
    } else {
      $('.js-pulse').removeClass('animated pulse');
    }
  });

  // トップページの最初の画像その1
  $('#intro-box01').on('inview', function(event, isInView) {
    if (isInView) {
      $('#intro-box01').addClass('animated fadeIn');
    } else {
      $('#intro-box01').removeClass('animated fadeIn');
    }
  });

  // トップページの最初の画像その2
  $('#intro-box02').on('inview', function(event, isInView) {
    if (isInView) {
      $('#intro-box02').addClass('animated fadeIn');
    } else {
      $('#intro-box02').removeClass('animated fadeIn');
    }
  });
  
  // メンバープロフィールのテキストその1
  $('#profile-card__text01').on('inview', function(event, isInView) {
    if (isInView) {
      $('#profile-card__text01').addClass('animated fadeInLeft');
    } else {
      $('#profile-card__text01').removeClass('animated fadeInLeft');
    }
  });

  // メンバープロフィールのテキストその2
  $('#profile-card__text02').on('inview', function(event, isInView) {
    if (isInView) {
      $('#profile-card__text02').addClass('animated fadeInLeft');
    } else {
      $('#profile-card__text02').removeClass('animated fadeInLeft');
    }
  });

});