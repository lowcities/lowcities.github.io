//Photography page script

let slideNumber = document.querySelectorAll('.slide').length;
let Carousel = function(frameSelector, sliderSelector, slidesSelector, leftArwBtn, rightArwBtn) {
  //stores position on left
  let leftPosition = 0;
  let frame = document.querySelector(frameSelector);
  let slides = document.querySelector(slidesSelector);
  let leftArrowBtn = document.querySelector(leftArwBtn);
  let rightArrowBtn = document.querySelector(rightArwBtn);
  let slider = document.querySelector(sliderSelector);
  let selectorCircle = document.querySelectorAll('.selector-circle');
  let lastCircle = selectorCircle[selectorCircle.length - 1];

  let photos = [
    {
      "image": "../img/0969.jpg"
    },
    {
      "image": "../img/1027.jpg"
    },
    {
      "image": "../img/1334.jpg"
    },
    {
      "image": "../img/1436.jpg"
    }
  ]

  //Add classes to photoFrame and slider divs
  frame.classList.add('photoFrame');
  slider.classList.add('slider');

  //Add event listeners to the arrow buttons
  leftArrowBtn.addEventListener('click', function() {
    carousel.previous();
  });

  rightArrowBtn.addEventListener('click', function() {
    carousel.next();
  });
  window.addEventListener('load', autoSlide);
  //Function that moves the slides left or right depending on variable value
  //Moves to the next slide if value is -1, moves to the previous is value is 1

  function clickableCircle() {
    for(let i = 0; i < selectorCircle.length; i++) {
      selectorCircle[i].addEventListener('click', function(e) {
        let left = i * -100;
        if(i === 0) {
          slider.style.left = 0;
          selectorCircle[i].classList.toggle('active');
        } else if(i !== 0) {
          moveSlide(-i);
          selectorCircle[i].classList.toggle('active');
        }
//        moveSlide(i);
        console.log(i);
        console.log(left);



      });
    }
  }

  function autoSlide() {
//    let interval = setInterval(carousel.next, 3000);
    selectorCircle[0].classList.add('active');
    clickableCircle();
  }

  function circleCycle(value) {
    let active = leftPosition / -100;
    let inactive = active + value;
    if(leftPosition === 0) {
      selectorCircle[0].classList.add('active');
      selectorCircle[1].classList.remove('active');
      lastCircle.classList.remove('active');
  } else if(leftPosition !== 0) {
      selectorCircle[0].classList.remove('active');
      selectorCircle[active].classList.add('active');
      selectorCircle[inactive].classList.remove('active');
    }
  }

  function moveSlide(value) {
    leftPosition += value * 100;
    slider.style.left = leftPosition + '%';
    console.log(leftPosition);

  };

  return {
    //Function to move to the next slide
    next: function() {
      if(leftPosition > (slideNumber -1) * -100) {
        moveSlide(-1);
        circleCycle(-1);
      } else {
        leftPosition = 0;
        slider.style.left = leftPosition + '%';
        circleCycle(-1);

      }
    },
    //Function to go to previous slide
    previous: function() {
      if(leftPosition !== 0) {
        moveSlide(1);
        circleCycle(1);
      } else {
        leftPosition = (slideNumber -1) * -100;
        slider.style.left = leftPosition + '%';
        circleCycle(1);
      }
    }

  };

};

(function createCircle() {
  let selectorHTML = '';
  let photoSelector = document.getElementById('photoSelector');
  for(let i = 0; i < slideNumber; i++) {
    selectorHTML += '<div class="selector-circle"></div>';
  }
  photoSelector.innerHTML = selectorHTML;

})();

  //Create new instance of Carousel
  let carousel = new Carousel('#photoFrame', '#slider', '#slider .slide', '.arrowLeft', '.arrowRight');
