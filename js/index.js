// window alerts above text when "Sign Me Up" buttons are pressed
const signUpButtons = document.getElementsByClassName('btn');

for (var i = 0 ; i < signUpButtons.length; i++) {
  signUpButtons[i].addEventListener('click', (event) => {
    event.stopPropagation();
    window.alert(`Vacation Starts Now!!`);
  });
}

//when 'Y' key is pressed, page background turns yellow (gold) and is returned to normal color when 'Y' key is released.
window.addEventListener('keydown', (event) => {
    if (event.keyCode == 89) {
      document.body.style.backgroundColor = 'gold';
    };
});
window.addEventListener('keyup', (event) => {
  if (event.keyCode == 89) {
    document.body.style.backgroundColor = 'white';
  };
});

//If browser goes offline, sad pic and off line message displays.
const pugDiv = document.createElement('div');
const pugPic = document.createElement('img');
pugPic.setAttribute('src', 'img/sadpug2.jpg')
pugDiv.appendChild(pugPic);
const headAndNav = document.querySelector('header');
const containerHome = document.querySelector('.home');
const footer = document.querySelector('footer');

window.addEventListener('offline', (event) => {
  headAndNav.style.display = 'none';
  containerHome.style.display = 'none';
  footer.style.display = 'none';
  document.body.appendChild(pugDiv);
});
//for online demo purposes, can be commented out later:
const navLogo = document.querySelector('.logo-heading');
navLogo.addEventListener('dblclick', (event) => {
  headAndNav.style.display = 'none';
  containerHome.style.display = 'none';
  footer.style.display = 'none';
  document.body.appendChild(pugDiv);
});


// When page scroll is activated, nav bar drops in opacity and return to 100% opacity when mouse enters field. Both with ease on style transition.
window.addEventListener('scroll', (event) => {
  headAndNav.style.opacity = '.5';
  headAndNav.style.transition = '0.5s';
});
headAndNav.addEventListener('mouseenter', (event) => {
  headAndNav.style.opacity = '1';
  headAndNav.style.transition = '0.5s';
});

// when switched to fullscreen, images are turned to grayscale
const images = document.querySelectorAll('img');

images.forEach((image) => {
  window.addEventListener('resize', (event) => {
    image.style.filter = 'grayscale(100%)';
    image.style.transition = '1s';
  });
});

//when image is dragged pagebackground turns aqua, then returns to normal when released.
images.forEach((image) => {
  image.addEventListener('drag', (event) => {
    document.body.style.backgroundColor = '#17A2B8';
    document.body.style.transition = '1s'
  });
});
images.forEach((image) => {
  image.addEventListener('dragend', (event) => {
    document.body.style.backgroundColor = 'white';
    document.body.style.transition = '1s'
  });
});

//When Fun In The Sun div is right clicked div border shows up.
let destinationDiv = document.querySelector('.destination');
destinationDiv.style.border = 'thick solid transparent';

destinationDiv.addEventListener('contextmenu', (event) => {
  destinationDiv.style.border = 'thick solid #6A9465';
  destinationDiv.style.transition = '1s';
});
destinationDiv.addEventListener('mouseleave', (event) => {
  destinationDiv.style.border = 'thick solid transparent';
  destinationDiv.style.transition = '1s';
});

//when paragraph text is copied to clipboard console log displays a message.
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((para) => {
  para.addEventListener('copy', (event) => {
    console.log(`Text has been saved to your clipboard!`);
  });
});


//When nav links are clicked the console displays a message about which link was clicked.
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
  console.log(`${event.target.textContent} link WAS clicked`);
  event.preventDefault();
  });
});

//Animation that tweens navigation links from off screen on the x-axis on page load.
window.addEventListener('load', (event) => {
  TweenMax.from(navLinks, 1, {x:800, ease: Bounce.easeOut});
});
