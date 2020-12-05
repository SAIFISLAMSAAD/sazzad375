  //navbar-part-start


  $('.toggle-bar').click(function () {
      $('.navbar-nav').toggle();

  });

  $('.search').click(function () {
      $('.search-overlay').addClass('active');
  });

  $('.close_btn').on('click', function () {
      $('.search-overlay').removeClass('active');
  });


  //navbar-part-end


  //banner-part-start
  $(function () {
      $('.venobox').venobox();






      $(".service-slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
          dots: false,
          centerMode: true,
          centerPadding: '0',
          nextArrow: '.right-arrow',
          prevArrow: '.left-arrow',
          responsive: [
              {
                  breakpoint: 769,
                  settings: {
                      infinite: true,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows: false,
                      autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.right-arrow',
                      prevArrow: '.left-arrow'
                  }
                          },
              {
                  breakpoint: 577,
                  settings: {
                      infinite: true,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows: false,
                      autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.right-arrow',
                      prevArrow: '.left-arrow'
                  }
                              },
              {
                  breakpoint: 321,
                  settings: {
                      infinite: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false,
                      autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.right-arrow',
                      prevArrow: '.left-arrow',
                  }

                              }
                          ]


      });


      $(".port-slick-slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 1500,
          dots: false,
          centerMode: true,
          centerPadding: '0',
          nextArrow: '.next',
          prevArrow: '.previ',
          responsive: [
              {
                  breakpoint: 769,
                  settings: {
                      infinite: true,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows: true,
                      autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.next',
                      prevArrow: '.previ'
                  }
              },
              {
                  breakpoint: 577,
                  settings: {
                      infinite: true,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows: true,
                      autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.next',
                      prevArrow: '.previ'
                  }
                  },
              {
                  breakpoint: 321,
                  settings: {
                      infinite: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                      autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.next',
                      prevArrow: '.previ'
                  }
 }

          ]

      });


      new WOW().init();



      $(".testi-slider").slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 1500,
          dots: false,
          centerMode: true,
          centerPadding: '0',
          nextArrow: '.right-arrow',
          prevArrow: '.left-arrow',
          responsive: [
              {

                  breakpoint: 769,
                  settings: {
                      infinite: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                      autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.right-arrow',
                      prevArrow: '.left-arrow'
                  }
              },
              {
                  breakpoint: 577,
                  settings: {
                      infinite: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                      autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.right-arrow',
                      prevArrow: '.left-arrow'
                  }
 }
                          ]

      });


      $(".blog-slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          //        autoplay: true,
          autoplaySpeed: 1500,
          dots: false,
          centerMode: true,
          centerPadding: '0',
          nextArrow: '.right-button',
          prevArrow: '.left-button',
          responsive: [
              {
                  breakpoint: 769,
                  settings: {
                      infinite: true,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows: true,
                      //        autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.right-button',
                      prevArrow: '.left-button'
                  }
              },
              {
                  breakpoint: 577,
                  settings: {
                      infinite: true,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows: true,
                      //        autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.right-button',
                      prevArrow: '.left-button'
                  }
              },
              {
                  breakpoint: 577,
                  settings: {
                      infinite: true,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows: true,
                      //        autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.right-button',
                      prevArrow: '.left-button'
                  }
              },
              {
                  breakpoint: 321,
                  settings: {
                      infinite: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                      //        autoplay: true,
                      autoplaySpeed: 1500,
                      dots: false,
                      centerMode: true,
                      centerPadding: '0',
                      nextArrow: '.right-button',
                      prevArrow: '.left-button'


                  }
 }
                          ]

      });





      $('.back-to-top').click(function () {
          event.preventDefault();


          $('body,html').animate({
              scrollTop: 0
          }, 2000);


      });


      var wow = new WOW({
          boxClass: 'wow', // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset: 0, // distance to the element when triggering the animation (default is 0)
          mobile: true, // trigger animations on mobile devices (default is true)
          live: true, // act on asynchronously loaded content (default is true)
          callback: function (box) {
              // the callback is fired every time an animation is started
              // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null, // optional scroll container selector, otherwise use window,
          resetAnimation: true, // reset animation on end (default is true)
      });

  });
