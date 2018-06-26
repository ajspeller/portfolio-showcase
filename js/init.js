(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    // $('.carousel').carousel();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
  });
});