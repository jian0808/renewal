AOS.init();

// header nav
$('#mainMenu').mouseover(function(){
  $('.dropdown').css('display','block');
})
$('#mainMenu').mouseout(function(){
  $('.dropdown').css('display','none');
})

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
          slidesToShow: 3
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
