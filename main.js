const hamburger = document.querySelector('.menu');
const navMenu = document.querySelector('#nav');

hamburger.addEventListener('click', menuOpen);
navMenu.addEventListener('click', navOpen);

function menuOpen () {;
    navMenu.classList.toggle('active');
}

function navOpen(){
  navMenu.classList.toggle('active');
}
