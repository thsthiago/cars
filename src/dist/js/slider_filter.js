"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var slider = document.querySelector('.filtro__slider');
var span = document.querySelector('.value__initial');
slider.addEventListener('input', function () {
  var linearValue = parseInt((slider.value - 500000) / 500000 * 100) + 99.8;
  slider.style.background = "linear-gradient(90deg, #401698 ".concat(linearValue, "%, #fff ").concat(linearValue, "%)");
  var valueArr = slider.value.split('');
  var value = slider.value;

  if (valueArr.length >= 4) {
    var last = valueArr.splice(valueArr.length - 3, 3);
    value = [].concat(_toConsumableArray(valueArr), [','], _toConsumableArray(last)).join('');
  }

  span.textContent = "R$".concat(value);
});