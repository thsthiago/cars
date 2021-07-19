const slider = document.querySelector('.filtro__slider')
const span = document.querySelector('.value__initial')

slider.addEventListener('input', () => {
  const linearValue = parseInt((slider.value - 500000) / 500000 * 100) + 99.8
  slider.style.background = `linear-gradient(90deg, #401698 ${linearValue}%, #fff ${linearValue}%)`
  const valueArr = slider.value.split('')

  let value = slider.value

  if (valueArr.length >= 4) {
    const last = valueArr.splice((valueArr.length - 3), 3)
    value = [...valueArr, ',', ...last].join('')
  }

  span.textContent = `R$${value}`
})
