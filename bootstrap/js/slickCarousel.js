$(document).ready(function(){
  $(".your-class").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,  
<<<<<<< HEAD
      prevArrow:'<a class="btn"><img src="images/Groupe39.png" class="slick-ml slick-prev"/></a>',
      nextArrow:'<a class="btn"><img src="images/Groupe38.png" class="slick-mr slick-next"/></a>',
=======
      prevArrow:'<a class="btn"><img src="images/Groupe39.png" class="slick-prev"/></a>',
      nextArrow:'<a class="btn"><img src="images/Groupe38.png" class="slick-next"/></a>',
>>>>>>> 2f82c252d0af1540e8a615bc4a852d7065e15e96
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
              }
          },
          {
              breakpoint: 768,
              settings: {
<<<<<<< HEAD
=======
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
>>>>>>> 2f82c252d0af1540e8a615bc4a852d7065e15e96
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]   
  });
});