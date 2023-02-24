// ANIMATE NUMBERS
function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
    let currentTime = Date.now();
    
    const step = (currentTime ) => {
    
        // if the start time is null, assign the current time to startTime
        if (!startTime) {
            startTime = currentTime ;
        }
    
        // calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime  - startTime) / duration, 1);
    
        // calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
    
        // checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    
// start animating
    window.requestAnimationFrame(step);
}

function load() {
    let text1 = document.getElementById('count1');
    let text2 = document.getElementById('count2');
    let text3 = document.getElementById('count3');

    animate(text1, 0, 176, 4000);
    animate(text2, 0, 6, 4000);
    animate(text3, 0, 42, 4000);
}

let firstTime = true;

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