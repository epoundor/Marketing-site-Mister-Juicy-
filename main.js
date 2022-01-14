
      var swiper = new Swiper(".swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 320px
            700: {
              slidesPerView:2 ,
              spaceBetween:0
            },
            // when window width is >= 480px
            1000: {
              slidesPerView: 3,
            },
            // when window width is >= 640px
            1300: {
              slidesPerView: 4,
            }
          } 
        });
    


// Counter
const counters = document.querySelectorAll(".num"),
      speed = 300;
      counters.forEach(counter =>{
        const updateCount = () =>{
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const  inc= Math.ceil(target / speed);
          if(count < target){
            counter.innerText= count + inc
            setTimeout(updateCount,1)
          }
          else
          {
            count.innerText=target
          }
          console.log(count)
        }
        updateCount();
      })