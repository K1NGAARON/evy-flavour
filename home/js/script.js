$(window).scroll(function() {
    let contentToCheck = '.animated';

    if(firstTime == true) {
        var top_of_element = $(contentToCheck).offset().top;
        var bottom_of_element = $(contentToCheck).offset().top + $(contentToCheck).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
    
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            load();
            firstTime = false;
        } else {
            // the element is not visible, do something else
        }
    } else {

    }
});