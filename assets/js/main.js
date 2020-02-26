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
    // scroll over header's height
    if ($(window).scrollTop() > $('header').height())
      $('.header__sub').addClass('fixed'); // show sub header

    else if ($(window).scrollTop() <= $('header').height() + 50)
      $('.header__sub').removeClass('fixed'); // hide sub header
      
    if ($(window).scrollTop() + 883 > $('footer').offset().top)
      $('.chat-box-btn').addClass('active'); //make chat box button stay on top of footer
    else if ($(window).scrollTop() + 883 <= $('footer').offset().top)
      $('.chat-box-btn').removeClass('active'); //chat box button back to fixed position
  })

  $('.banner__slick').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    prevArrow: null,
    nextArrow: null
  })

  $('.promote__slick').slick({
    dots: true,
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    prevArrow: null,
    nextArrow: null,
  })

  $('.main__slick').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    prevArrow: null,
    nextArrow: null
  })

  $('.hot-brand__slick').slick({
    dots: false,
    infinite: true,
    variableWidth: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>'
  })
})