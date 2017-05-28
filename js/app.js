"use strict";
const menuButton = document.querySelector('.nav');
const toggleMenu = document.querySelector('.nav_menu');
const menu = document.querySelector('#menu');
const content = document.getElementById('content');
const containers = document.querySelectorAll('.container');
const link = document.getElementById('menu a');
const topOfNav = menu.offsetTop;
const headers = document.querySelectorAll('.headline');
//get

//

//Function to show or hide menu bar depending on screen size
const checkSize = () => {
  if(window.innerWidth <= 898 ) {
    menu.style.display = 'none';

  } else {
    menu.style.display = 'flex';
    }
  }

//AJAX to load links to page
//  $('#menu a, #heading').on('click', function(e) {
//  e.preventDefault();
//  const url = this.href;
//  menuButton.innerHTML = 'MENU'
//  $('#container').remove();
//  $("#content").load(url).hide().toggle("fold", 1000);
//  checkSize();
//  });



toggleMenu.addEventListener('click', () => {
  if (menu.style.display == 'none') {
      menu.style.display = 'flex';
      menuButton.innerHTML = 'CLOSE';
  } else {
      menu.style.display = 'none';
      menuButton.innerHTML = 'MENU'
      }
});
//Check size of screen on page load
checkSize();
//Check size of screen on resize of window
$(window).resize(checkSize);


//creates a sticky nav bar when window is scrolled to the top of nav bar.
window.onscroll = (function(e) {
  let stuck = false;
  if(window.scrollY >= topOfNav && !stuck) {
    menu.classList.add('sticky-nav');
    stuck = true;
  } else {
    menu.classList.remove('sticky-nav');
    stuck = false;

  }
});

  function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

//Show or hide content based on window position
function showContent(e) {
  containers.forEach(container => {
    //half way through container
    const showContainerAt = (window.scrollY + window.innerHeight) - container.offsetHeight / 8;
    //botom of the container
    const containerBottom = container.offsetTop + container.offsetHeight;
    const isHalfShown = showContainerAt > container.offsetTop;
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
    const showHeadlineAt = (window.scrollY + window.innerHeight) - headline.offsetHeight;
    const headlineBottom = headline.offsetTop + headline.offsetHeight * 40;
    const isHalfShown = showHeadlineAt > headline.offsetTop;
    const isNotScrolledPast = window.scrollY < headlineBottom;
    if(isHalfShown && isNotScrolledPast) {
      headline.classList.add('headline-show');
    } else {
      headline.classList.remove('headline-show');
    }
  });
}

window.addEventListener('scroll', debounce(showContent));

window.addEventListener('scroll', debounce(showHeadline), {capture: true});



