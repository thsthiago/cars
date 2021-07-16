const [previusBtn, nextBtn] = document.querySelectorAll('.depoimentos__controler span')
const depoimentos = document.querySelector('.depoimentos__client')
const container = document.querySelector('.depoimentos__item')

depoimentos.style.width = `${container.clientWidth * 3}px`

let item = 1
const widthContainer = container.clientWidth

window.addEventListener('resize', () => {
  depoimentos.style.width = `${container.clientWidth * 3}px`
})

const handleNext = () => {
  if (item !== 3) {
    depoimentos.style.transform = `translateX(-${widthContainer * item}px)`
    previusBtn.classList.remove('--disable')
    if (item === 2) nextBtn.classList.add('--disable')
    item++
  }
}

const handlePrevius = () => {
  if (item !== 1) {
    nextBtn.classList.remove('--disable')
    if (item === 2) {
      depoimentos.style.transform = 'translateX(0px)'
      previusBtn.classList.add('--disable')
      item = 1
    } else {
      depoimentos.style.transform = `translateX(-${widthContainer}px)`
      item = 2
    }
  }
}

previusBtn.addEventListener('click', handlePrevius)
nextBtn.addEventListener('click', handleNext)
