"use strict";

var btn = document.querySelector('.header__btn');
var burger = document.querySelector('.header__burger');
var header = document.querySelector('.header__nav-container-mobile');
var nav = document.querySelector('.header__nav-mobile');

var activeBars = function activeBars() {
  burger.classList.toggle('--burger');
  nav.classList.toggle('--header-nav-active');
  btn.classList.toggle('--header-btn-active');
  header.classList.toggle('--header-mobile-active');
};

btn.addEventListener('click', activeBars);