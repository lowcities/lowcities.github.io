"use strict";
const menuButton = document.querySelector('.nav');
const toggleMenu = document.querySelector('.nav_menu');
const menu = document.querySelector('#menu');


  
  //Function to show or hide menu bar depending on screen size
const checkSize = () => {
  if(window.innerWidth <= 898 ) {
    menu.style.display = 'none';

  } else {
    menu.style.display = 'block';
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


  //Jquery to load intro to webpage
//  $('#container').load('intro.html');


//AJAX to load quotes from quote.json
//
//xhr.onreadystatechange = () => {
//  if(xhr.readyState === 4) {
//    let quotes = JSON.parse(xhr.responseText);
//    let randNum = randQuote(1, 4);
//    let quoteHTML = '<p class="quote">' + quotes[randNum].quote + '</p>';
//    quoteBox.innerHTML = quoteHTML;
//    console.log(quoteHTML);
//  }
//};
//quoteButton.addEventListener('click', () =>{
//  xhr.open('GET', 'quote.json');
//  xhr.send();
//});

////Function to input content to a div using innerHTML
//document.getElementById("#press").onclick =
// function displayContent () {
//    const first = document.getElementById("input").value;
//    document.getElementById("output").innerHTML = "<p>" + first + "</p>";
//}
//
//function displayContent() {
//  const info = documet.getElementById('info').value;
//  const content = "<p>" + info + "</p>";
//  document.getElementById('output').innerHTML = content;
//
//}



