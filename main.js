const hamburger = document.querySelector('.menu');
const navMenu = document.querySelector('#nav');

hamburger.addEventListener('click', menuOpen);
navMenu.addEventListener('click', navOpen);

function menuOpen () {;
  navMenu.classList.toggle('active');
  hamburger.classList.remove('active');
}

function navOpen(){
  navMenu.classList.remove('active');
  hamburger.classList.toggle('active');
}


const cookieBox = document.querySelector('.wrapper');
const acceptBtn = document.querySelector('.accept');
const rejectBtn = document.querySelector('.reject');

acceptBtn.addEventListener('click', clearSite);

function clearSite () {
  cookieBox.classList.toggle('active');
  console.log(wrapper);
}