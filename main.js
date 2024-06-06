var swiper = new Swiper(".mySwiper", {
    sliderPerView: "auto",
    spaceBetween: 0,
    loop:true,
   
    autoplay:{
      delay: 1500,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".cart_slider", {
    slidesPerView: 10,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // breakpoints: {
      //   320: {
      //       slidesPerView: 1,
      //   },
      //   480: {
      //       slidesPerView: 2,
      //   },
      //   768: {
      //       slidesPerView: 3,
      //   },
      //   1200: {
      //       slidesPerView: 4,
      //   },
      // }
  });