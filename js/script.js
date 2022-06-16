//mixitup
$(document).ready(function () {
    var mixer = mixitup('.box-list');
});

// parallax
$('.parallax-window').parallax({
    imageSrc: 'img/2.png'
});


//  scrolltop 
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $("#topbtn").fadeIn();
        } else {
            $("#topbtn").fadeOut();
        }

    });

    $("#topbtn").click(function () {
        $('html ,body').animate({
            scrollTop: 0
        }, 800)
    })
})