//Photography page script
let photos = [

    {
      "image": "./img/0969.jpg"
    },
    {
      "image": "./img/1027.jpg"
    },
    {
      "image": "./img/1334.jpg"
    },
    {
      "image": "./img/1436.jpg"
    },
    {
      "image": "./img/mixmasterg.jpg"
    },
    {
      "image": "./img/city.jpg"
    }
  ]
let photoLength = photos.length;
let Carousel = function(frameSelector, leftArwBtn, rightArwBtn) {

  let frame = document.querySelector(frameSelector);
  let leftArrowBtn = document.querySelector(leftArwBtn);
  let rightArrowBtn = document.querySelector(rightArwBtn);
  let selectorCircle = document.querySelectorAll('.selector-circle');
  let lastCircle = selectorCircle[selectorCircle.length - 1];
  //creates an array from the node list.
  let circleArray = Array.prototype.slice.call(selectorCircle);
  let startPhoto = 0;





  //Add classes to photoFrame and slider divs
  frame.classList.add('photoFrame');

  //Add event listeners to the arrow buttons
  leftArrowBtn.addEventListener('click', function() {
    carousel.previous();
  });

  rightArrowBtn.addEventListener('click', function() {
    carousel.next();
    
  });
  window.addEventListener('load', autoSlide);
  window.addEventListener('load', function() {
    frame.style.backgroundImage = "url('"+photos[startPhoto].image+"')";
    console.log(startPhoto);
  });

  function fadePhoto(pic) {
    $(frame).fadeOut(200, function() { 
      let photo = frame.style.backgroundImage = "url('"+photos[pic].image+"')";
      $(this).fadeIn(200);
    });

  }

  //Function makes selector circles clickable and moves carousel to image associated with 'clicked' selector circle
  function clickableCircle() {
    //loops through array of selector circles.
    for(let i = 0; i < circleArray.length; i++) {
      //adds clickability to each circle
      circleArray[i].addEventListener('click', function(e) {
        //gets the index value of the 'clicked' circle
        let currentCircleIndex = circleArray.indexOf(this);
        //changes the currently visible photo to match index of 'clicked' circle.
        fadePhoto(currentCircleIndex);
         //sets the startPhoto counter to the current index.
        startPhoto = currentCircleIndex;
        //adds active status to the 'clicked' circle.
        circleCycle(currentCircleIndex);
      });
    }
  }

  function autoSlide() {
//    let interval = setInterval(carousel.next, 3000);
    selectorCircle[0].classList.add('active');
    clickableCircle();
  }

  //This function adds active status to the photoselector circle that pertains to it's corrisponding photo and removes it from all others.
  function circleCycle(value) {
    //the circle to receive active status.
    let currentCircle = circleArray[value];
    //loops through the array
    for(let i = 0; i < circleArray.length; i++) {
      //if the current index value is equal the the value of the startPhoto counter, add active status to current circle.
      if(i === value) {
        currentCircle.classList.add('active');
      //for the rest of the array, remove the active status of each element.
      } else {
        circleArray[i].classList.remove('active');
      }
    }
  }

  return {
    //Function to move to the next photo in the photo carousel.
    next: function() {
       if(startPhoto === 0)  {
        //if the the first photo in array is showing, the carousel moves to second photo.
        //sets counter to one
         startPhoto++;
        console.log(startPhoto);
       }
      //if last picture in array is showing, programs moves back to the first picture and restarts the counter.
        else if(startPhoto >= photoLength -1) {
        startPhoto = 0;
        console.log(startPhoto);
      }//for all other pictures in array, function moves to the next image and adds one to the counter.
       else {
        startPhoto++;
        console.log(startPhoto);
      }
      //displays the appropriate photo on page.
      fadePhoto(startPhoto);
      //adds active status to circle selector that corresponds to currently visible photo.
      circleCycle(startPhoto);
    },
    //Function to go to previous photo in the photo carousel.
    previous: function() {
      //if the first photo in the array is currently visible.
      if(startPhoto === 0) {
        //moves to the last photo to the array and
        //sets the counter to equal the index value of the last photo in the array.
        startPhoto = photoLength -1;
        console.log(startPhoto);
        //for every photo that is not the first one
    } else if(startPhoto > 0) {
        //subtract one from the counter and changes the photo to the previous one in the array.
        startPhoto--;
        console.log(startPhoto);
    }
      //displays the appropriate photo on page.
      fadePhoto(startPhoto);
      //adds active status to circle selector that corresponds to currently visible photo.
      circleCycle(startPhoto);
  }

};
};
//Function adds the photo selector circles to the photography section.
(function createCircle() {
  //creates an empty HTML string.
  let selectorHTML = '';
  let photoSelector = document.getElementById('photoSelector');
  //creates a circle for every photo in the photo array.
  for(let i = 0; i < photoLength; i++) {
    selectorHTML += '<div class="selector-circle"></div>';
  }
  //adds all the circle DIVs to the web page.
  photoSelector.innerHTML = selectorHTML;

})();

  //Create new instance of Carousel
  let carousel = new Carousel('#photoFrame', '.arrowLeft', '.arrowRight');
