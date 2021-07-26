const numberImages = document.querySelectorAll('.slide__img img').length
const btnNext = document.querySelector('.slide__next')
const btnBefore = document.querySelector('.slide__before')
const slider = document.querySelector('.imgs')

let index = 0

const next = () => {
  if (index === numberImages - 1) {
    return
  }

  index++
  slider.style.transform = `translateX(-${100 * index}%)`
  console.log(index)
}

const before = () => {
  if (index === 0) {
    return
  }

  index--
  slider.style.transform = `translateX(-${100 * index}%)`
  console.log(index)
}

btnNext.addEventListener('click', next)
btnBefore.addEventListener('click', before)
