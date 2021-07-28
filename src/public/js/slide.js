const [previusBtn, nextBtn] = document.querySelectorAll('.depoimentos__controler span')
const depoimentos = document.querySelector('.depoimentos__client')
const container = document.querySelector('.depoimentos__item')
const listDepoimentos = document.querySelectorAll('.depoimentos__desc').length

let index = 0

const handleNext = () => {
  if (index === listDepoimentos - 2) nextBtn.classList.add('--disable')
  if (index === listDepoimentos - 1) return
  previusBtn.classList.remove('--disable')
  index++
  depoimentos.style.transform = `translateX(-${index * 33.3}%)`
}

const handlePrevius = () => {
  if (index === 1) previusBtn.classList.add('--disable')
  if (index === 0) return
  nextBtn.classList.remove('--disable')
  index--
  depoimentos.style.transform = `translateX(-${index * 33.3}%)`
}

previusBtn.addEventListener('click', handlePrevius)
nextBtn.addEventListener('click', handleNext)
