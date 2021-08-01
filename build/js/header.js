let headerMenu = document.querySelector('.header-h');
let headerLink = document.querySelector('.info-h__link');
let headerSvgLoc = document.querySelector('.info-h__icon--location');
let headerSvgTime = document.querySelector('.info-h__icon--time');
let headerSvgPhone = document.querySelector('.info-h__icon--phone');

window.pageYOffset == 0;
window.onscroll = function () {

  if (window.pageYOffset == 0) {
    headerMenu.classList.remove('header-h--scroll');
    headerLink.classList.remove('info-h__link--scroll');
    headerSvgLoc.classList.remove('info-h__icon--scroll');
    headerSvgTime.classList.remove('info-h__icon--scroll');
    headerSvgPhone.classList.remove('info-h__icon--scroll');

  } else {
    headerMenu.classList.add('header-h--scroll');
    headerLink.classList.add('info-h__link--scroll');
    headerSvgLoc.classList.add('info-h__icon--scroll');
    headerSvgTime.classList.add('info-h__icon--scroll');
    headerSvgPhone.classList.add('info-h__icon--scroll');
  }
};

let sectionMenu = document.querySelector('.menu');
let btnMenu = document.querySelector('.header-h__btn');
let btnMenuLogoWhite = document.querySelector('.header-h__logo--white');
let btnMenuLogoBlack = document.querySelector('.header-h__logo--black');

btnMenu.onclick = function () {
  if (sectionMenu.classList.contains('menu--open')) {
    sectionMenu.classList.remove('menu--open');
    btnMenuLogoBlack.style.display = 'none';
    btnMenuLogoWhite.style.display = 'block';
    btnMenu.classList.remove('header-h__btn--click');
  } else {
    sectionMenu.classList.add('menu--open');
    btnMenu.classList.add('header-h__btn--click');
    btnMenuLogoBlack.style.display = 'block';
    btnMenuLogoWhite.style.display = 'none';
  }
};
