const clock = document.querySelector('.clock');
setInterval( () => clock.innerText = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}), 1000);



// SLIDER
$(document).ready(function(){
  $('.reviews-slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
  });
});