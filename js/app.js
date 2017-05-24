"use strict";
const menuButton = document.querySelector('.nav');
const toggleMenu = document.querySelector('.nav_menu');
const menu = document.querySelector('#menu');
const content = document.getElementById('content');


  
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

//function check if an element contains a certain class
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
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

const topOfNav = menu.offsetTop;

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





