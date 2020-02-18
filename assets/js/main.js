$(document).ready(function () {
  $('.product__title').click(function () {
    $('.product__list').toggleClass('active'); // toggle product dropdown in desktop
  })

  $(".row__product-btn").click(function () {
    $(".row__product-dropdown").toggleClass('active'); // toggle product dropdown in mobile
  });

  $(".row__menu-btn").click(function() {
		$(this).children('i').toggleClass("active"); // toggle menu button animate
		$(".row__menu-dropdown").toggleClass("active"); // toggle menu dropdown
  });
})