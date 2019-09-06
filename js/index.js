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