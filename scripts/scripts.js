window.onload = function () {
    var elem = document.getElementById('spinner');
    elem.style.transition = "opacity 0.5s linear 0s";
    elem.style.opacity = 0;
    elem.style.height = 0;
};

$(function() {
  $('ul.nav a').bind('click', function(event) {
    var $anchor = $(this);


    $('html, body').stop().animate({
      scrollLeft: $($anchor.attr('href')).offset().left
    }, 1000);
    event.preventDefault();
  });
});
