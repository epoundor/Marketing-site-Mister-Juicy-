new Splide( '.splide' ).mount();


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