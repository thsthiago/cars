const buttonFilter = document.querySelector('.filtro__container button')
const filterForm = document.querySelector('.filtro__form')
const title = document.querySelector('.--title')
const body = document.querySelector('body')
const filter = document.querySelector('.filtro')

buttonFilter.addEventListener('click', () => {
  filterForm.classList.toggle('filtro--block')
})

if (body.clientWidth >= 768) {
  body.addEventListener('scroll', () => {
    if (body.scrollTop >= 120) {
      filter.style.top = '20px'
    } else {
      filter.style.top = '150px'
    }
  })
}
