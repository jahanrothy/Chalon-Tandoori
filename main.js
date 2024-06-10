var swiper = new Swiper(".mySwiper", {
    sliderPerView: "auto",
    spaceBetween: 0,
    loop:true,
    speed:1200,
    zoom:true,
   
    autoplay:{
      delay: 1600,
      
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

const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const logoEl = document.querySelector(".mobile-logo")

// openBtn[0].addEventListener

//open button functionality
const openFunc = () => {
  logoEl.classList.add('hidden')
  // closeBtn.classList.remove('hidden')
  // closeBtn.classList.add('flex')
  // closeBtn.display = 'flex !important'
  closeBtn.classList.replace('hidden','flex')
  openBtn.classList.add('hidden')
  // left = 50
  // laft = 0
  
}

//add evnt listner in open button
openBtn.addEventListener("click", openFunc)

//close button functionaity
closeBtn.addEventListener("click",() =>{
  
  logoEl.classList.replace('hidden', 'flex')
  openBtn.classList.replace('hidden', 'flex')
  closeBtn.classList.add('hidden')
})
