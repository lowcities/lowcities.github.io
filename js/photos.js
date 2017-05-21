//Photography page script
let Carousel = function(frameSelector, sliderSelector, slidesSelector, leftArwBtn, rightArwBtn) {
  //stores position on left
  let leftPosition = 0;
  let frame = document.querySelector(frameSelector);
  let slides = document.querySelector(slidesSelector);
  //get number of slides
  let slideNumber = 4;
  let leftArrowBtn = document.querySelector(leftArwBtn);
  let rightArrowBtn = document.querySelector(rightArwBtn);
  let slider = document.querySelector(sliderSelector);

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

  //Function that moves the slides left or right depending on variable value
  //Moves to the next slide if value is -1, moves to the previous is value is 1
  let moveSlide = function(value) {
    console.log("slide test");
    leftPosition += value * 100;
    slider.style.left = leftPosition + '%';
  };

  return {
    //Function to move to the next slide
    next: function() {
      if(leftPosition > (slideNumber -1) * -100) {
        console.log("test");
        moveSlide(-1);
      } else {
        console.log("test");
        leftPosition = 0;
        slider.style.left = leftPosition + '%';
      }
    },
    //Function to go to previous slide
    previous: function() {
      if(leftPosition !== 0) {
        console.log("test");
        moveSlide(1);
      } else {
        leftPosition = (slideNumber -1) * -100;
        console.log("test");
        slider.style.left = leftPosition + '%';
      }
    }

  };

};

  //Create new instance of Carousel
  let carousel = new Carousel('.photoFrame', '#slider', '#slider .slide', '.arrowLeft', '.arrowRight');
