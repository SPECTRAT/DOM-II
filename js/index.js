// window alerts above text when "Sign Me Up" buttons are pressed
const signUpButtons = document.getElementsByClassName('btn');

for (var i = 0 ; i < signUpButtons.length; i++) {
  signUpButtons[i].addEventListener('click', (event) => {
    window.alert(`Vacation Starts Now!!`);
  });
}