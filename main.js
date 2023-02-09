const menu = document.querySelector('.menu');
const navMenu = document.querySelector('#nav');
const container= document.querySelector('.Container');

menu.addEventListener('click', menuOpen);
navMenu.addEventListener('click', navOpen);

function menuOpen () {;
  navMenu.classList.toggle('active');
  menu.classList.remove('active');
  menu.classList.toggle('rotate');
  container.classList.toggle('transparentBackground');
}

function navOpen(){
  navMenu.classList.remove('active');
  menu.classList.toggle('active');
}

/*
du klickar på accept knappen
cookies rutan försvinner
du klickar på nekaknappen
cookies rutan försvinner
*/
const cookieBox = document.querySelector('.wrapper');
const acceptBtn = document.querySelector('.accept');
const rejectBtn = document.querySelector('.reject');

acceptBtn.addEventListener('click', clearSite);
rejectBtn.addEventListener("click", clearCookie);

function clearSite () {
  cookieBox.classList.toggle('active');
  console.log(wrapper);
}

function clearCookie(){
  cookieBox.classList.toggle('active');
}

/*
du skriver in ett mejlkonto
mejlkontot kontrolleras (rätt format)
du klickar på signknappen
signknappen ska avaktiveras, bli grå
*/



const inputEmail=document.querySelector(".email");
const submitBtn=document.querySelector('.sign');

submitBtn.addEventListener('keyup', buttonDisabled);
submitBtn.disabled=true;


function buttonDisabled() {
  if (inputEmail.value === "") {
      return true;
  } else {
      submitBtn.classList.toggle("disabled");
      return false;
  }
}

