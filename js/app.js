// STICKY LARGE MENU
$(document).scroll(function() {
    const header = $('.header');
    const logo = $('.header .logo');

    if ($(this).scrollTop() > header.height()) {
        $(logo).attr("src", "/assets/branding/logo.png");
        header.addClass('active');
    } else {
        $(logo).attr("src", "/assets/branding/logo-white.png");
        header.removeClass('active');
    }
});

// SMALL MENU
$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});