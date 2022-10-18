// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     spaceBetween: 16,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true
//     }
//   });

document.addEventListener('DOMContentLoaded', () => {
  
  let init = false;

  function swiperMode() {
      let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
      let desktop = window.matchMedia('(min-width: 769px)');
  
      // Enable (for mobile)
      if(mobile.matches) {
          if (!init) {
              init = true;
              swiper = new Swiper('.mySwiper', {
                  slidesPerView: "auto",
                  initialSlide: 0,
                  
                  spaceBetween: 16,
                  pagination: {
                      clickable: true,
                      el: '.swiper-pagination',
                    },   
              });
          }
      }
      // Disable (for desktop)
      else if(desktop.matches) {
          swiper.destroy();
          init = false;
      }
  }

  window.addEventListener('load', function() {
      swiperMode();
  });

})

