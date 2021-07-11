"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var _document$querySelect = document.querySelectorAll('.depoimentos__controler span'),
    _document$querySelect2 = _slicedToArray(_document$querySelect, 2),
    previusBtn = _document$querySelect2[0],
    nextBtn = _document$querySelect2[1];

var depoimentos = document.querySelector('.depoimentos__client');
var container = document.querySelector('.depoimentos__item');
depoimentos.style.width = "".concat(container.clientWidth * 3, "px");
var item = 1;
var widthContainer = container.clientWidth;
window.addEventListener('resize', function () {
  depoimentos.style.width = "".concat(container.clientWidth * 3, "px");
});

var handleNext = function handleNext() {
  if (item !== 3) {
    depoimentos.style.transform = "translateX(-".concat(widthContainer * item, "px)");
    previusBtn.classList.remove('--disable');
    if (item === 2) nextBtn.classList.add('--disable');
    item++;
  }
};

var handlePrevius = function handlePrevius() {
  if (item !== 1) {
    nextBtn.classList.remove('--disable');

    if (item === 2) {
      depoimentos.style.transform = 'translateX(0px)';
      previusBtn.classList.add('--disable');
      item = 1;
    } else {
      depoimentos.style.transform = "translateX(-".concat(widthContainer, "px)");
      item = 2;
    }
  }
};

previusBtn.addEventListener('click', handlePrevius);
nextBtn.addEventListener('click', handleNext);