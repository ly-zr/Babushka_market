(function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });

    $('.burger').on ('click', function (e) {
        e.preventDefault();
        $('.nav-menu').toggleClass('nav-menu_active')
        $('.nav__wrapper').toggleClass('nav__wrapper_active')
        $('.nav-menu__item').toggleClass('nav-menu__item_active')
    });

    $('.advantages__wrapper').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        waitForAnimate: false,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 570,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


    $('.catalog__list').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        waitForAnimate: false,


        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 615,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 570,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
}());

var $page = $('html, body');
$('a[href*="#"]').click(function() {
$page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
}, 800);
return false;
});
