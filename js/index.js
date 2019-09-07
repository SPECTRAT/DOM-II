// window alerts above text when "Sign Me Up" buttons are pressed
const signUpButtons = document.getElementsByClassName('btn');

for (var i = 0 ; i < signUpButtons.length; i++) {
  signUpButtons[i].addEventListener('click', (event) => {
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
  console.log("AYE YO NETWORK DIED!!");
  //document.body.style.display = 'none'; (would get rid of everything...)
  // document.getElementsByTagName('body')[0].innerHTML = content;
  //document.body.appendChild(pugDiv);
  headAndNav.style.display = 'none';
  containerHome.style.display = 'none';
  footer.style.display = 'none';
  document.body.appendChild(pugDiv);
});


// When page scroll is activated, nav bar drops in opacity and return to 100% opacity when mouse enters field.


//