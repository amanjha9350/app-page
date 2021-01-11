$(document).ready(function(){
    $(".btn-read-more").click(function(){
      $(".lower-container").toggle();
      console.log($(this).text());
    //   if($(this).text().toUpperCase() == 'READ MORE') {
    //       $(this).text('READ LESS');
    //   } else {
    //     $(this).text('Read More');
    //   }
    var btnText = ($(this).text().toUpperCase() == 'READ MORE') ? 'Read Less' : 'Read More';
    $(this).text(btnText)


    });

    $('.list-content > li').click(function() {
        $('.list-content li.active').removeClass('active');
        $('.panel-content.active').removeClass('active');

        var targetElement = '.' + $(this).data('target');
        //.script = '.' + 'script';

        $(this).addClass('active');
        $(targetElement).addClass('active');
        //$('.script').addClass('active');
    });
    
    // $(".language-btn span").click(function(){
    //   $(".language-list ").show();
    // });
    // $(".language-selector").hover(function(){

    //   //$(this).siblings('.list-item-cake').toggle();
    //   //$(this).siblings().toggle();
    //   //$(this).next().toggle();
    //   //$(this).parent().toggleClass('active');
    //   //$(this).toggleClass('active');
      
      
    //   //$(this).siblings('.list-item-cake').toggleClass("active");

    //   $(".language-selector").toggle();
    // })
    $(".arrow-slide").click(function() {
      //var tablListOffset = $('.tab-list').offset().top;
      $("html,body").animate({ scrollTop: 0}, "slow");
      return false;
    });

    $('.tab-list > li').click(function() {
      $('.tab-list > li.active').removeClass('active');
      //$(".active overview").removeClass("active")

      var targetElement = '#' + $(this).data('target');
      //.script = '.' + 'script';
      $(this).addClass('active');
      var scrollToElement = $(targetElement).offset().top - 150;
      $("html,body").animate({ scrollTop: scrollToElement }, "slow");
      //$(targetElement).addClass('active');
      //$('.script').addClass('active');  
  });

  // $('#gallery').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   variableWidth: true
  // });
  // $('#gallery').slick({
  //   dots: false,
  //   infinite: false,
  //   slidesToShow: 4,
  //   slidesToScroll:2
  // });

  $("#gallery").lightSlider({
    item: 4,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 30,
  });

  $("#gallery").lightGallery();


  $(window).scroll(function() {
    var scrollTopPos = $(window).scrollTop();

    if(scrollTopPos > 435) {
      //$('header').css('position','fixed');
      // $('header').attr('style','position: fixed; background:red;');
      
      
      $('header').addClass('fixed-header');
       } else {
        // $('header').css('position','absolute');
          $("header").removeClass("fixed-header")
        }

      // Scroll top arrow show and hide==================================================
      if(scrollTopPos > 450){
      $('.arrow-slide').css("display",'block');
      } else {
      $('.arrow-slide').css('display','none');
      }
      // var headerSecond = $(window).scrollTop();
      // if(headerSecond > 456){
      //   $(".tab-list").addClass("fixed-header")
      // } else {
      //   $(".tab-list").removeClass("fixed-header")
      // }
  })  
  $(window).scroll(function(){
    var headerSecond = $(window).scrollTop();
      if(headerSecond > 550){
        $(".tab-list").addClass("fixed-header")
      } else {
        $(".tab-list").removeClass("fixed-header")
      }



    var overviewEle = $('#overview').offset().top - 180;
    var galeryEle = $('#gallery').offset().top - 180;
    var featuresEle = $('#features').offset().top - 180;
    var htwEle = $('#htw').offset().top - 180;
    var tatEle = $('#tat').offset().top - 180;

    var scrollTopValue = $(window).scrollTop();
      if(scrollTopValue > overviewEle){
        $(".tab-list .overview").addClass("active")
      } else{
        $(".tab-list .overview").removeClass("active")
      }
    if (scrollTopValue > galeryEle){
      $(".tab-list .overview").removeClass("active")
      $(".tab-list .gallery").addClass("active")
    } else {

      $(".tab-list .gallery").removeClass("active")
    }
    if(scrollTopValue > featuresEle){
       $(".tab-list .gallery").removeClass("active")
      $('.tab-list .features').addClass("active")
    } else{
      $(".tab-list .features").removeClass("active")
    }
    if(scrollTopValue > htwEle){
      $(".tab-list .features").removeClass("active")
      $(".tab-list .how-to-play").addClass("active")
    } else{
      $(".tab-list .how-to-play").removeClass("active")
    }
    if(scrollTopValue > tatEle){
      $(".tab-list .how-to-play").removeClass("active")
      $(".tab-list .tips-and-tricks").addClass("active")
    } else{
      $(".tab-list .tips-and-tricks").removeClass("active")
    }
  })
  
});
 
