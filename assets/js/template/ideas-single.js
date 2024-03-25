// slider static

var swiper = new Swiper(".slider-sections-slides", {
      slidesPerView: "auto",
      spaceBetween: 10,
});


var swiper = new Swiper(".singleSwiper", {
      zoom: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
    
// slide to right
const slideIcon = document.querySelector('.slide-icon');
document.addEventListener("scroll", function() {

if (window.pageYOffset > 20)
slideIcon.style.display = "none";

if (window.pageYOffset < 20)
slideIcon.style.display = "block";

});