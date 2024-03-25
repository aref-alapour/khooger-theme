//FaQ Accordion
const accordion = document.getElementsByClassName('container');
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

var swiper = new Swiper(".single-product-gallery-thumbnail", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".single-product-gallery", {
      loop: true,
      spaceBetween: 10,
      centeredSlides: true,
      thumbs: {
        swiper: swiper,
      },
    });
 var swiper = new Swiper(".store-slider-slide", {
      navigation: {
        nextEl: ".store-slider-button-next",
        prevEl: ".store-slider-button-prev",
      },
    });