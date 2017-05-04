"use strict";
const menuButton = document.querySelector('.nav');
const toggleMenu = document.querySelector('.nav_menu');
const menu = document.querySelector('#menu');
const classes = document.getElementById("menu").classList;


  
  //Function to show or hide menu bar depending on screen size
const checkSize = () => {
  if(window.innerWidth <= 898 ) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
    }
  }

  
  

//AJAX to load links to page
  $('#menu a, #heading').on('click', function(e) {
  e.preventDefault();
  const url = this.href;
  menuButton.innerHTML = 'MENU'
  $('#container').remove();
  $("#content").load(url).hide().toggle("fold", 1000);
  checkSize();
  });
  
toggleMenu.addEventListener('click', () => {

  if (menu.style.display == 'none') {
      menu.style.display = 'flex';
      menuButton.innerHTML = 'CLOSE';
  } else {
      menu.style.display = 'none';
      menuButton.innerHTML = 'MENU'
      }
});
  //Jquery for toggling Nav menu
  /*jQuery(document).ready(function($){
  $('.nav_menu').on('click', function() {
    $('#menu').toggle("slow");
    });
  });*/


   [].forEach.call(document.querySelectorAll('#thumbnails a'), function(el) {
    el.addEventListener('click', function () {
      event.preventDefault();
      console.log('test');
    });
  });

//Check size of screen on page load
  checkSize();

  //Check size of screen on resize of window
  $(window).resize(checkSize);


  //Jquery to load intro to webpage
  $('#container').load('intro.html');




//Function to input content to a div using innerHTML
document.getElementById("#press").onclick =
 function displayContent () {
    const first = document.getElementById("input").value;
    document.getElementById("output").innerHTML = "<p>" + first + "</p>";
}
    
function displayContent() {
  const info = documet.getElementById('info').value;
  const content = "<p>" + info + "</p>";
  document.getElementById('output').innerHTML = content;
   
}
/*var $dataClickState = $(this).attr('data-click-state');
        if($dataClickState === "closed" || $dataClickState === undefined) {
           $(this).attr('data-click-state', "open");
            $('#menu').animate({
                left:  "0px",
            }, 200);

            $('.wrapper').animate({
                left: "300px"
            }, 200);

      } else {
            $(this).attr('data-click-state', "closed");
            $('#menu').animate({
                left:  "-300px"
            }, 200);
            
            $('.wrapper').animate({
                left: "0px"
            }, 200);
            $('.biopic').effect('shake');
        }
    });*/


