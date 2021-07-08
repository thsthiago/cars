"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var descricao = document.querySelector('.destaques__cards');

var Card = /*#__PURE__*/function () {
  function Card(data) {
    _classCallCheck(this, Card);

    this.data = data;
  }

  _createClass(Card, [{
    key: "createButton",
    value: function createButton() {
      var btn = document.createElement('button');
      btn.classList.add('destaques__btn');
      btn.type = 'button';
      btn.innerText = 'Mais detalhes';
      return btn;
    }
  }, {
    key: "createDescri\xE7\xE3o",
    value: function createDescrição() {
      var descricao = document.createElement('div');
      descricao.classList.add('destaques__descricao');
      var title = document.createElement('strong');
      title.classList.add('destaques__title');
      title.innerText = 'Nome do carro';
      var subTitle = document.createElement('strong');
      subTitle.classList.add('destaques__subtitle');
      subTitle.innerText = '1.6 8v, Gasolina, 2P, Manual';
      descricao.appendChild(title);
      descricao.appendChild(subTitle);
      return descricao;
    }
  }, {
    key: "createImage",
    value: function createImage() {
      var image = new Image();
      image.src = 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
      image.alt = 'Foto do veículo';
      image.classList.add('destaques__image');
      return image;
    }
  }, {
    key: "createContainer",
    value: function createContainer() {
      var container = document.createElement('div');
      container.classList.add('destaques__card');
      var image = this.createImage();
      var descricao = this.createDescrição();
      var btn = this.createButton();
      container.appendChild(image);
      container.appendChild(descricao);
      container.appendChild(btn);
      return container;
    }
  }]);

  return Card;
}();

for (var i = 0; i <= 2; i++) {
  var card = new Card('data');
  var container = card.createContainer();
  descricao.appendChild(container);
}
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