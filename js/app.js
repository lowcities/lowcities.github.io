"use strict";
const menuButton = document.querySelector('.nav');
const toggleMenu = document.querySelector('.nav_menu');
const menuBar = document.getElementById('menu');
const fadeContainers = document.querySelectorAll('.fade-container');
const link = document.querySelectorAll('.navItem');
const topOfNav = menuBar.offsetTop;
const topOfMobile = toggleMenu.offsetTop;
const navLogo = document.querySelector('.navLogo');
const headers = document.querySelectorAll('.headline');
const introContainer = document.querySelector('.intro');
const width = introContainer.innerWidth;
const bluredImage = document.querySelector('.about-background');

//Function to show or hide menu bar depending on screen size
function checkSize() {
  if(window.innerWidth <= 898) {
    menuBar.classList.add('menu-hide');
    menuBar.classList.add('sticky-mobile');
    menuButton.innerHTML = 'MENU';
}
  else {
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
      menuBar.classList.remove('menu-hide');
      menuButton.innerHTML = 'CLOSE';
  }
  else {
      menuBar.classList.add('menu-hide');
      menuButton.innerHTML = 'MENU';
      }
}


//creates a sticky nav bar when window is scrolled to the top of nav bar.
function stickyNav(e) {
  if(window.innerWidth >= 898 && window.scrollY >= topOfNav) {
    menuBar.classList.add('sticky-nav');
  } else {
    menuBar.classList.remove('sticky-nav');
  }
}

//Creates a sticky mobile menu when window is scrolled to top of mobile menu button
function stickyMobileMenu(e) {
  if(window.innerWidth <= 898 && window.scrollY >= topOfMobile) {
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
  $(bluredImage).attr("style", `clip-path: inset(0 0 0 ${Math.floor(coords.left)}px)`);
  console.log(coords.top);
}

window.addEventListener('scroll', showContent);

window.addEventListener('scroll', showHeadline, {capture: true});

window.addEventListener('scroll', stickyMobileMenu);

window.addEventListener('scroll', stickyNav);

toggleMenu.addEventListener('click', mobileMenuToggle);

window.addEventListener('load', imageClip);

//Check size of screen on page load
checkSize();
//Check size of screen on resize of window
$(window).resize(checkSize);
$(window).resize(imageClip);







