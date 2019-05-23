/* This java script is seen Headers
http://jsfiddle.net/dylanholmes222/LaL3v/1/ */

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#header-section');
    var offset = startchange.offset();
    
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top)  {
                $("#nav-skeleton").css('background-color', '#112d4e');
            } else {
                $('#nav-skeleton').css('background-color', 'transparent');
            }
        });
    }
});

$('.carousel').carousel({
    interval: 2000000
  })

