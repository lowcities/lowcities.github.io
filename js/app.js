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
const modalEl = document.querySelector('.modal');
const modalButton = document.querySelector('.modal-button');
const modOverlay = document.querySelector('.modal-overlay');

//Function to show or hide menu bar depending on screen size
function checkSize() {
  if(window.innerWidth <= 768) {
    menuBar.classList.add('menu-hide');
    banner.style.display = 'none';
    mobileLogo.style.display = 'inline-block';
    menuBar.classList.add('sticky-mobile');
    toggleMenu.classList.remove('open');
}
  else {
    banner.style.display = 'block';
    mobileLogo.style.display = 'none';
    menuBar.classList.remove('menu-hide');
    menuBar.classList.remove('sticky-mobile');
    }
  }


//Function closes mobile menu if a link is clicked.
link.forEach(function(item) {
  item.addEventListener('click', checkSize);
});

//function opens or closes nav menu in mobile view
function mobileMenuToggle(e) {
  if (menuBar.classList.contains('menu-hide')) {
      toggleMenu.classList.add('open');
      menuBar.classList.remove('menu-hide');
      
  }
  else {
      toggleMenu.classList.remove('open');
      menuBar.classList.add('menu-hide');
      
      }
}


//creates a sticky nav bar when window is scrolled to the top of nav bar.
function stickyNav(e) {
  if(window.innerWidth >= 768 && window.scrollY >= heder.offsetHeight) {
    menuBar.classList.add('sticky-nav');
  } else  {
    menuBar.classList.remove('sticky-nav');
  }
  console.log(window.scrollY, heder.offsetHeight);
}

//Creates a sticky mobile menu when window is scrolled to top of mobile menu button
function stickyMobileMenu() {
  if(window.innerWidth <= 768 && window.scrollY >= mobileHead.offsetHeight) {
    toggleMenu.classList.add('sticky-nav-button');
//    menuBar.classList.add('sticky-mobile');
  }
  else {
    toggleMenu.classList.remove('sticky-nav-button');
  }
}



//Show or hide content based on window position
function showContent(e) {
  fadeContainers.forEach(container => {
    //screen position at which content fades in
    const showContainerAt = (window.scrollY + window.innerHeight) - container.offsetHeight / 5;
    //bottom of the container
    const containerBottom = container.offsetTop + container.offsetHeight;
    const isHalfShown = showContainerAt > container.offsetTop;
    //content is still visible on the screen
    const isNotScrolledPast = window.scrollY < containerBottom;
    if(isHalfShown && isNotScrolledPast) {
      container.classList.add('container-show');
    } else {
      container.classList.remove('container-show');

    }
  });
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

function modalReveal() {
  console.log('test');
  let modalClose = document.querySelector('.modal-close');
  if(!modOverlay.classList.contains('modal-active')) {
    modalButton.classList.add('to-circle');
    modOverlay.classList.add('modal-active');
    modalEl.style.zIndex = 83;
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

window.addEventListener('load', checkSize);

window.addEventListener('load', imageClip);

window.addEventListener('scroll', showContent);

window.addEventListener('scroll', showHeadline, {capture: true});

window.addEventListener('scroll', stickyMobileMenu);

window.addEventListener('scroll', stickyNav);

toggleMenu.addEventListener('click', mobileMenuToggle);

modalButton.addEventListener('click', modalReveal);

//Check size of screen on resize of window
$(window).resize(checkSize);
$(window).resize(imageClip);







