$(function () {
  // 데스크탑 헤더 gnb
  $('#header .gnb .depth02').hide();

  $('#header .gnb>li').on('mouseenter', function () {
    $(this).find('.depth02').stop().slideDown(300);
  });
  $('#header .gnb>li').on('mouseleave', function () {
    $(this).find('.depth02').stop().slideUp(300);
  });

  // 태블릿, 모바일 헤더 gnb 열기, 닫기
  $('#header .btn_open').on('click', function (e) {
    e.preventDefault();

    $('#header .m_gnb_wrap').slideToggle(600);
  });

  // m_gnb 아코디언
  $('#header .m_gnb_wrap .depth02').hide();
  $('#header .m_gnb_wrap .m_gnb>li>a').on('click', function (e) {
    e.preventDefault();

    $(this).parent().toggleClass('on').siblings().removeClass('on');
    $(this).next().slideToggle().parent().siblings().find('.depth02').slideUp();
  });

  // 헤더 검색모달
  $('#header .btn_search').on('click', function (e) {
    e.preventDefault();
    $('#header .search_wrap').slideDown();
  });

  $('#header .btn_close').on('click', function (e) {
    e.preventDefault();
    $('#header .search_wrap').slideUp();
  });

  // 메인 슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.main_slider_wrap .swiper-pagination',
      type: "fraction",
      formatFractionCurrent: function (number) {
        return number < 10 ? + number : number;
      },
      formatFractionTotal: function (number) {
        return (number);
      },
      // 숫자타입의 페이지네이션 사용시 안에 내용을 변경
      renderFraction: function (currentClass, totalClass, index) {
        return '<span class="' + currentClass + '"></span><span class="' + totalClass + '"></span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 소프트웨어 슬라이더
  var ww = $(window).width();
  var swSlider = undefined;

  function initSwiper() {

    if (ww < 767 && swSlider == undefined) {
      swSlider = new Swiper('.software_slider', {
        slidesPerView: 2,
        spaceBetween: 20,
        simulateTouch: true,
        loop: true,
      });
    } else if (ww >= 767 && swSlider != undefined) {
      swSlider.destroy();
      swSlider = undefined;
    }
  }
  initSwiper();

  $(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
  }).trigger('resize');

  // 메인 인포
  var infoSlider = new Swiper('.m_info_slider', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  //푸터 탑버튼
  $('#footer .btn_top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 800);
  });

  // 푸터 사이트맵
  $('#footer .footer_top .m_sitemap .depth02').hide();
  $('#footer .footer_top .m_sitemap>li>a').on('click', function (e) {
    e.preventDefault();

    $(this).parent().toggleClass('on').siblings().removeClass('on');
    $(this).next().slideToggle().parent().siblings().find('.depth02').slideUp();
  });
});