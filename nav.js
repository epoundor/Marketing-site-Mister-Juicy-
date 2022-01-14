const menuBtn=document.querySelector(".menu"),
      navCol=document.querySelector(".collapse");
      
      
      
      menuBtn.addEventListener('click',()=>{
          menuBtn.classList.toggle('active')
          console.log(navCol);
          navCol.classList.toggle('active')
})