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

      var targetElement = '.' + $(this).data('target');
      //.script = '.' + 'script';

      $(this).addClass('active');
      var scrollToElement = $(targetElement).offset().top-150;
      console.log("scrollToElement: ",scrollToElement);
      $("html,body").animate({ scrollTop: scrollToElement }, "slow");
      //$(targetElement).addClass('active');
      //$('.script').addClass('active'); 
  });


  // $(window).scroll(function() {
  //   console.log($(window).scrollTop() )
  // })
});