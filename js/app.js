"use strict";
const mobileHead = document.querySelector('.mobile-header');
const toggleMenu = document.querySelector('.nav_menu');
const menuBar = document.getElementById('menu');
const fadeContainers = document.querySelectorAll('.fade-container');
const link = document.querySelectorAll('.navItem');
const topOfNav = menuBar.offsetTop;
const topOfMobile = toggleMenu.offsetTop;
const navLogo = document.querySelector('.navLogo');
const headers = document.querySelectorAll('.headline');
const introContainer = document.querySelector('.intro');
const bluredImage = document.querySelector('.about-background');
const banner = document.querySelector('.logo');
const mobileLogo = document.querySelector('.mobile-logo');
const heder = document.querySelector('header');
const modalEl = document.querySelector('.contact');
const modalButton = document.querySelector('.modal-button');
const modOverlay = document.querySelector('.modal-overlay');
const contactBtn = document.querySelector('.contact-button');

//Function to show or hide menu bar depending on screen size
function checkSize() {
  if(window.innerWidth <= 767) {
    menuBar.classList.remove('menu-show');
    menuBar.classList.add('sticky-mobile');
    toggleMenu.classList.remove('open');
}
  else {
    menuBar.classList.add('menu-show');
    menuBar.classList.remove('sticky-mobile');
    }
  }
//Function closes mobile menu if a link is clicked.
link.forEach(function(item) {
  item.addEventListener('click', checkSize);
});

//function opens or closes nav menu in mobile view
function mobileMenuToggle(e) {
  if (!menuBar.classList.contains('menu-show')) {
      toggleMenu.classList.add('open');
      menuBar.classList.add('menu-show');
      
  }
  else {
      toggleMenu.classList.remove('open');
      menuBar.classList.remove('menu-show');
      
      }
}
//creates a sticky nav bar when window is scrolled to the top of nav bar.
function stickyNav(e) {
  if(window.innerWidth >= 767 && window.scrollY >= heder.offsetHeight) {
    menuBar.classList.add('sticky-nav');
  } else  {
    menuBar.classList.remove('sticky-nav');
  }
}
//Creates a sticky mobile menu when window is scrolled to top of mobile menu button
function stickyMobileMenu() {
  if(window.innerWidth <= 767 && window.scrollY >= mobileHead.offsetHeight) {
    toggleMenu.classList.add('sticky-nav-button');
//    menuBar.classList.add('sticky-mobile');
  }
  else {
    toggleMenu.classList.remove('sticky-nav-button');
  }
}
function showHeadline(e) {
  headers.forEach(headline => {
    //Screen position at which headline slides in
    const showHeadlineAt = (window.scrollY + window.innerHeight) - headline.offsetHeight;
    //Bottom position of headline
    const headlineBottom = headline.offsetTop + headline.offsetHeight * 40;
    const isHalfShown = showHeadlineAt > headline.offsetTop;
    //Headline is still visible on the screen
    const isNotScrolledPast = window.scrollY < headlineBottom;
    if(isHalfShown && isNotScrolledPast) {
      headline.classList.add('headline-show');
    } else {
      headline.classList.remove('headline-show');
    }
  });
}

function imageClip() {
  let coords = introContainer.getBoundingClientRect();
  $(bluredImage).attr("style", `-webkit-clip-path: inset(0 0 0 ${Math.floor(coords.left)}px);
  clip-path: inset(0 0 0 ${Math.floor(coords.left)}px);`);
}
//Function reveals contact form when "contact me" button is clicked.
function modalReveal() {
  let modalClose = document.querySelector('.modal-close');
  if(!modOverlay.classList.contains('modal-active')) {
    modalButton.classList.add('to-circle');
    modOverlay.classList.add('modal-active');
    modalEl.style.zIndex = 83;
    //Closes modal whn the "x" is clicked.
    modalClose.addEventListener('click', function() {
      modOverlay.classList.remove('modal-active');
      modalButton.classList.remove('to-circle');
      modalEl.style.zIndex = 79;
    });
  }
  else {
    modOverlay.classList.remove('modal-active');
    modalButton.classList.remove('to-circle');
  }
}
//Function enables smooth scrolling to sections clicked from the navbar/menu.
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        var navBarHeight = menuBar.offsetHeight;
        var scrollToPosition = target.offset().top - navBarHeight;
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: scrollToPosition
            }, 1000);
            checkSize();
            return false;
        }
    }
});

//Function determines if inputed email address is valid
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

var $valid = $('<span></span>').insertAfter('.email');
const submitButton = document.querySelector('.submit-button');
let validEmail;
//adds event listener to the email input field
$('.email').keyup(function() {
  //Value of email input
  var $value = $(this).val();
  //Tests if email is valid
  if(isValidEmailAddress($value) === true) {
  //Displays message stating email is valid and adds appropriate css class
    $valid.text("Email address is valid.").removeClass('inValid').addClass('valid');
    validEmail = true;
  } else {
  //Displays message stating email is invalid and adds appropriate css class
    $valid.text("Please enter valid email address.").addClass('inValid');
    validEmail = false;
  }
});
//When form submit button is clicked, function determines if all required inputs have been filled out.
submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  let required = document.querySelectorAll('.required');
  let isValid;
  required.forEach(item => {
    if(item.value == "") {
      item.classList.add('inComplete');
      isValid = false;
    } else {
      item.classList.remove('inComplete');
      isValid = true
    }
  });
  if(isValid === true && validEmail === true) {
    alert("Server unavailable, try again later!");
  } else {
    alert("Please fill out all required fields.");
    
  }
});

window.addEventListener('load', imageClip);

window.addEventListener('load', checkSize);

// window.addEventListener('scroll', showContent);

window.addEventListener('scroll', showHeadline, {capture: true});

window.addEventListener('scroll', stickyMobileMenu);

window.addEventListener('scroll', stickyNav);

toggleMenu.addEventListener('click', mobileMenuToggle);

modalButton.addEventListener('click', modalReveal);

contactBtn.addEventListener('click', modalReveal);

//Check size of screen on resize of window
$(window).resize(checkSize);
$(window).resize(imageClip);







