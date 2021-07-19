const btn = document.querySelector('.header__btn')
const burger = document.querySelector('.header__burger')
const header = document.querySelector('.header__nav-container-mobile')
const nav = document.querySelector('.header__nav-mobile')
const contato = document.querySelectorAll('.header__nav-mobile .header__item')[3]

const activeBars = () => {
  burger.classList.toggle('--burger')
  nav.classList.toggle('--header-nav-active')
  btn.classList.toggle('--header-btn-active')
  header.classList.toggle('--header-mobile-active')
}

btn.addEventListener('click', activeBars)
contato.addEventListener('click', activeBars)
