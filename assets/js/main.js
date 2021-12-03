AOS.init();

// pc-menu dropDown
$(function(){
    $('.pc-menu').mouseover(function(){
    $('.sub-menu, .subMenu_bg').stop().slideDown()
  });

  $('.pc-menu').mouseout(function(){
    $('.sub-menu, .subMenu_bg').stop().slideUp()
  });
});

// mo-menu dropDown
// $('.mo-menu > li').click(function() {
//   if ( $(this).hasClass('active') ) {
//     $(this).find('.sub-menu').stop().slideUp(300);
//     $(this).removeClass('active');
//   }
//   else {
//     $(this).find('.sub-menu').stop().slideDown(300);
//     $(this).addClass('active');
//   }
// });

$('.xi-bars').click(function(){
  $('#accordion').slideToggle();
});

// 모바일메뉴 아코디언
$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
    active:false,
    collapsible:true
  });
} );

// main slide Swiper
  var swiper = new Swiper(".mySwiper", {
    // cssMode: true,
    loop: true,    
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });

  // slick slider
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
