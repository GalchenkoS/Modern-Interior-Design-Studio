$(document).ready(function () {
  $(".slider").slick();
});
$(".burger-menu ").on("click", ".bar", function () {
  $(".menu__list").slideToggle();
  $(".bar").toggleClass("change");
  $(".menu__link").slideRight();
});
