$(function(){




      //  Sticky Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 100){
        $('.navbar-expand-lg').addClass('my_stick_bg');
    }
    else {
         $('.navbar-expand-lg').removeClass('my_stick_bg');
    }
    });  



    // slick slider 
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        arrows:true,
        prevArrow:'<i class="fa-solid fa-circle-chevron-right aright"></i>',
        nextArrow:'<i class="fa-solid fa-circle-chevron-left aleft"></i>',

        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows:false,
                dots: true,
                
              }
            },


            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows:false,
                dots: true,
              }
            },
            
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows:false,
                dots: true,
              }
            },


           
          ]


      });



//==== Back-to-top button
$(window).on('scroll', function(event) {
  if($(this).scrollTop() > 600){
      $('.back-to-top').fadeIn(200)
  } else{
      $('.back-to-top').fadeOut(200)
  }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
event.preventDefault();

$('html, body').animate({
    scrollTop: 0,
}, 1000);
});









new VenoBox({
  selector: '.my-video-links',
});

});




// custom js 

