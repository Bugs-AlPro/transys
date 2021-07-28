let headerMenu = document.querySelector('.header-h');
let headerLink = document.querySelector('.info-h__link');
let headerSvgLoc = document.querySelector('.info-h__icon--location');
let headerSvgTime = document.querySelector('.info-h__icon--time');
let headerSvgPhone = document.querySelector('.info-h__icon--phone');

window.onscroll = function () {
  if (window.pageYOffset > 10) {
    headerMenu.classList.add('header-h--scroll');
    headerLink.classList.add('info-h__link--scroll');
    headerSvgLoc.classList.add('info-h__icon--scroll');
    headerSvgTime.classList.add('info-h__icon--scroll');
    headerSvgPhone.classList.add('info-h__icon--scroll');
  } else {
    headerMenu.classList.remove('header-h--scroll');
    headerLink.classList.remove('info-h__link--scroll');
    headerSvgLoc.classList.remove('info-h__icon--scroll');
    headerSvgTime.classList.remove('info-h__icon--scroll');
    headerSvgPhone.classList.remove('info-h__icon--scroll');
  }
};
