$(document).ready(function(){
  $(".your-class").slick({
      dots: false,
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
                  arrows: false
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode:true,
                  arrows: false,
                  centerPadding: '40px',
              }
          }
      ]   
  });


  $(".mobile-slider").slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,  
    prevArrow:'<a class="btn"><img src="images/Groupe39.png" class="slick-ml slick-prev"/></a>',
    nextArrow:'<a class="btn"><img src="images/Groupe38.png" class="slick-mr slick-next"/></a>',
    responsive: [
        
        {
            breakpoint: 591,
            settings: {
                slidesToShow: 1,
                unslicked: false,
                slidesToScroll: 1,
                centerMode:true,
                arrows: false,
                centerPadding: '40px',
            }
        }
    ]   
});
});


$(document).ready(function(){
    $(".your").slick({
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
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode:true,
                    arrows: false,
                    centerPadding: '-100px',
                }
            }
        ]   
    });
  });

  $(".slides").slick({
    dots: false,
    slidesToShow : 4,
    speed: 300,
    autoPlay : true,
    infinite: true,
    prevArrow:'<a class="btn"><img src="./maquettes/Groupe 39.png" class="slick-ml slick-prev"/></a>',
    nextArrow:'<a class="btn"><img src="./maquettes/Groupe 38.png" class="slick-mr slick-next"/></a>',
    slidesToScroll: 1, 
  //   arrows: false, 
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 851,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]   
});




      $(".categories-slides").slick({
        dots: false,
        speed: 300,
        infinite: true,
      variableWidth: true,
      slidesToScroll: 2, 
      nextArrow : document.querySelector(".categorie_bock_right"),
      prevArrow : undefined,
 responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode:true,
                    arrows: false,
                    centerPadding: '40px',
                }
            }
        ]   
    });