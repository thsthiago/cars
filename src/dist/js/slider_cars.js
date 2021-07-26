"use strict";

var numberImages = document.querySelectorAll('.slide__img img').length;
var btnNext = document.querySelector('.slide__next');
var btnBefore = document.querySelector('.slide__before');
var slider = document.querySelector('.imgs');
var index = 0;

var next = function next() {
  if (index === numberImages - 1) {
    return;
  }

  index++;
  slider.style.transform = "translateX(-".concat(100 * index, "%)");
  console.log(index);
};

var before = function before() {
  if (index === 0) {
    return;
  }

  index--;
  slider.style.transform = "translateX(-".concat(100 * index, "%)");
  console.log(index);
};

btnNext.addEventListener('click', next);
btnBefore.addEventListener('click', before);