//Photography page script


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
let photoLength = photos.length;
let Carousel = function(frameSelector, leftArwBtn, rightArwBtn) {

  let frame = document.querySelector(frameSelector);
  let leftArrowBtn = document.querySelector(leftArwBtn);
  let rightArrowBtn = document.querySelector(rightArwBtn);
  let selectorCircle = document.querySelectorAll('.selector-circle');
  let lastCircle = selectorCircle[selectorCircle.length - 1];
  let randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
  };
  let randPhoto = randNum(1, photos.length);
  let startPhoto = 0;
  let photoIndex;




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

  function getIndex() {
    for(let i = 0; i < photos.length; i++) {
      photoIndex = i;
    }
  }

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


  };

  return {
    //Function to move to the next slide
    next: function() {
       if(startPhoto === 0)  {
        let value =
        frame.style.backgroundImage = "url('"+photos[startPhoto +1].image+"')";
        startPhoto++;
        console.log(startPhoto);
       }
        else if(startPhoto >= photoLength -1) {
        startPhoto = 0;
        console.log(startPhoto);
        let value =
        frame.style.backgroundImage = "url('"+photos[startPhoto].image+"')";
        console.log(startPhoto);
      }
       else {
        frame.style.backgroundImage = "url('"+photos[startPhoto +1].image+"')";
        startPhoto++;
        console.log(startPhoto);
      }
    },
    //Function to go to previous slide
    previous: function() {
      if(startPhoto === 0) {
        let value =
        frame.style.backgroundImage = "url('"+photos[photoLength -1].image+"')";
        startPhoto = photoLength -1;
        console.log(startPhoto);
    } else if(startPhoto > 0) {
        startPhoto--;
        let value =
        frame.style.backgroundImage = "url('"+photos[startPhoto].image+"')";

        console.log(startPhoto);
    }

  }

};
};

(function createCircle() {
  let selectorHTML = '';
  let photoSelector = document.getElementById('photoSelector');
  for(let i = 0; i < photoLength; i++) {
    selectorHTML += '<div class="selector-circle"></div>';
  }
  photoSelector.innerHTML = selectorHTML;

})();

  //Create new instance of Carousel
  let carousel = new Carousel('#photoFrame', '.arrowLeft', '.arrowRight');
