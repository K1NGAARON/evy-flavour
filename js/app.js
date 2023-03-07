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

let animationStyle = "slideUp";
let animationTarget = ".animate";

// SLIDE UP ROWS IN VIEWPORT
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(animationStyle);
        }
      });
  });
  
const targets = document.querySelectorAll(animationTarget);
for (const target of targets) {
    observer.observe(target);
}