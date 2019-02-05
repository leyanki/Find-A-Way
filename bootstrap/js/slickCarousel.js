$(document).ready(function(){
  $(".your-class").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,  
      prevArrow:'<a class="btn"><img src="images/Groupe39.png" class="slick-ml slick-prev"/></a>',
      nextArrow:'<a class="btn"><img src="images/Groupe38.png" class="slick-mr slick-next"/></a>',
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
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]   
  });
});