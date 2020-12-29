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
    $(".menu-list > li").hover(function(){
      $(this).children(".lan-btn-selector").show();
    }, function(){
      $(this).children(".lan-btn-selector").hide();

    })
});