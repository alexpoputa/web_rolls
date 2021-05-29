
// background interval change

let banner = document.querySelector(".banner");
let num = 1;


setInterval(() => {
    num++;
    if (num == 5){
        num = 1;   
    }
    banner.style.backgroundImage = `url(/assets/banner-${num}.jpg)`;
}, 7000);



// active nav links on scroll

const onScroll = (event) => {
    let scrollPos = $(document).scrollTop();
    $('.nav-links a').each(function () {

        let currLink = $(this);
        let refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos + 100 && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-links li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$(document).ready(() => {

    $(document).on("scroll", onScroll);

     //smoothscroll

     $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })

        $(this).addClass('active');
      
        let target = this.hash,
            menu = target;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
})



// Hamburger menu

let menu = document.querySelector(".menu");
let ham = document.querySelector(".ham");
let xIcon = document.querySelector(".xIcon");
let menuIcon = document.querySelector(".menuIcon");
let menuLinks = document.querySelectorAll(".menuLink");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

menuLinks.forEach(function(menuLink){
    menuLink.addEventListener("click", toggleMenu);
  }
)

