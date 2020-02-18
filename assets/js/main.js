$(document).ready(function () {
  $('.product__title').click(function () {
    $('.product__list').toggleClass('active');
  })
  $(".product-nav__dropdown-btn").click(function () {
    $(".product-nav__dropdown-menu").toggleClass('active');
  });
  $(".wrap__menu-btn").click(function() {
		$(this).children('i').toggleClass("active");
		$(".wrap__menu-dropdown").toggleClass("active");
  });
  
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > $('.desktop__nav').offset().top)
  //     $(".desktop__nav").addClass('active');
  //   else if ($(this).scrollTop() <= $('.desktop__nav').offset().top)
  //     $(".desktop__nav").removeClass("active");
  // })
})