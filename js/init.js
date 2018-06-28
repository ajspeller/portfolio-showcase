document.addEventListener('DOMContentLoaded', function() {

  var sideNavElems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sideNavElems);

  var scrollSpyElems = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(scrollSpyElems);

  var parallaxElems = document.querySelectorAll('.parallax');
  M.Parallax.init(parallaxElems);

});