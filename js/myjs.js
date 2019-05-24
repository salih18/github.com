/* This java script is about scrolling position effects

http://jsfiddle.net/dylanholmes222/LaL3v/1/ */

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#nav-skeleton');
    $('#above-top').css('display', 'none');
    var offset = startchange.offset();
    
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top)  {
                $("#nav-skeleton").css('background-color', '#112d4e');
                
                $("#above-top").css('display', 'inline');
               
            } else {
               
                $('#nav-skeleton').css('background-color', 'transparent');
                $('#above-top').css('display', 'none');
                
            }
        });
    }
});

/* carousel pause */

$('.carousel').carousel({
    interval: 2000000
  })

/* Smooth Scroll script is from codepen*/

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      var target = $(this.hash);
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
      }
    });
  });
  
