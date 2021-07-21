"use strict";

var buttonFilter = document.querySelector('.filtro__container button');
var filterForm = document.querySelector('.filtro__form');
var title = document.querySelector('.--title');
var body = document.querySelector('body');
var filter = document.querySelector('.filtro');
buttonFilter.addEventListener('click', function () {
  filterForm.classList.toggle('filtro--block');
});

if (body.clientWidth >= 768) {
  body.addEventListener('scroll', function () {
    if (body.scrollTop >= 120) {
      filter.style.top = '20px';
    } else {
      filter.style.top = '150px';
    }
  });
}