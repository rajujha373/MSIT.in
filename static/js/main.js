/*
function attachEvents(){
    $("#rightpanelbody").als({
        visible_items: 4,
        scrolling_items: 2,
        orientation: "vertical",
        circular: "yes",
        autoscroll: "yes",
        interval: 2000
    });
    if(window.innerWidth > 720){
        $(window).scroll(function() {
            if ($(window).scrollTop() > 120) {
                $('body').css({
                    'padding-top': '50px'
                });
                $('#bs-example-navbar-collapse-2').addClass('navbar-fixed-top');
            }
            if ($(window).scrollTop() < 121) {
                $('body').css({
                    'padding-top': '0px'
                });
                $('#bs-example-navbar-collapse-2').removeClass('navbar-fixed-top');
            }
        });
    }else{
        $(window).unbind('scroll');
    }
}

$(window).resize(attachEvents);
*/
$(document).ready(function() {
    $(".als-wrapper").css("overflow: hidden");
    //attachEvents();
    console.log("inside als");
    $("#demo3").als({
    visible_items: 3,
    scrolling_items: 1,
    orientation: "vertical",
    circular: "yes",
    autoscroll: "yes",
    interval: 2000
});
});

//vignesh's way of opening external links in new tab
document.querySelectorAll('a').forEach(e => {
    if(!(e.href).match(RegExp('http://www.msit.in', 'g' )))
        e.target = '_blank';
})

// Minified Extra JS files
