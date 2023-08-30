

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);

function scrollFunction(){
    if(window.scrollY > 0){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}

// Testemonial Section

$('.testimonials-container').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTime:6000,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
            "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:true
      },
      768:{
          items:2
      }
  }
})

// On load Animation
// gsap.fromTo(
//     ".loading-page",
//     { opacity: 1 },
//     {
//       opacity: 0,
//       display: "none",
//       duration: 1.5,
//       delay: 3.5,
//     }
//   );
  
//   gsap.fromTo(
//     ".logo-name",
//     {
//       y: 50,
//       opacity: 0,
//     },
//     {
//       y: 0,
//       opacity: 1,
//       duration: 2,
//       delay: 0.5,
//     }
//   );
