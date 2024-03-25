const accordion = document.getElementsByClassName('container');

//Advance Slide
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: "auto",
      freeMode: true,
    watchSlidesProgress: true,
    direction: "horizontal",
    breakpoints: {
        1201: {
            direction: "vertical",
        }
    }
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
      thumbs: {
        swiper: swiper,
      },
    }); 
// readSlider
var swiper = new Swiper(".readSlider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });
//FaQ Accordion
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
    }