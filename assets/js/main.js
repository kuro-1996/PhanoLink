$(document).ready(function () {
  $('.product__title').click(function () {
    $('.product__list').toggleClass('active'); // toggle product dropdown in desktop
  })

  $(".row__product-btn").click(function () {
    $(".row__product-dropdown").toggleClass('active'); // toggle product dropdown in mobile
  });

  $(".row__menu-btn").click(function() {
		$(this).toggleClass("active"); // toggle menu button animate
		$(".row__menu-dropdown").toggleClass("active"); // toggle menu dropdown
  });

  $(document).mouseup(function (e) {
    //close desktop dropdown product if click on html
    if ($(e.target).closest(".product__title").length === 0) {
        $(".product__list").removeClass('active');
    }
    //close mobile dropdown product if click on html
    if ($(e.target).closest(".row__product-btn").length === 0) {
        $(".row__product-dropdown").removeClass('active');
    }
    //close mobile menu dropdown if click outside of search bar
    if ($(e.target).closest(".menu-dropdown__search").length === 0 && $(e.target).closest(".row__menu-btn").length === 0) {
        $(".row__menu-dropdown , .row__menu-btn").removeClass('active');
    }
  });
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > $('header').height())
      $('.header__sub').addClass('fixed');
    else if ($(window).scrollTop() <= $('header').height() + 50) 
      $('.header__sub').removeClass('fixed');
  })
})