$(document).ready(function () {
  $('.product__title').click(function () {
    $('.product__list').toggleClass('active'); // toggle product dropdown in desktop
  })

  $(".product-nav__dropdown-btn").click(function () {
    $(".product-nav__dropdown-menu").toggleClass('active'); // toggle product dropdown in mobile
  });

  $(".row__menu-btn").click(function() {
		$(this).children('i').toggleClass("active"); // toggle menu button animate
		$(".row__menu-dropdown").toggleClass("active"); // toggle menu dropdown
  });
})