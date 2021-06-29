const descricao = document.querySelector('.destaques__cards')

class Card {
  constructor(data) {
    this.data = data;
  }

  createButton() {
    const btn = document.createElement('button')
    btn.classList.add('destaques__btn')
    btn.type = 'button'
    btn.innerText = 'Mais detalhes'

    return btn
  }

  createDescrição() {
    const descricao = document.createElement('div')
    descricao.classList.add('destaques__descricao')

    const title = document.createElement('strong')
    title.classList.add('destaques__title')
    title.innerText = `Nome do carro`

    const subTitle = document.createElement('strong')
    subTitle.classList.add('destaques__subtitle')
    subTitle.innerText = `1.6 8v, Gasolina, 2P, Manual`

    descricao.appendChild(title)
    descricao.appendChild(subTitle)

    return descricao
  }

  createImage() {
    const image = new Image()
    image.src = 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    image.alt = 'Foto do veículo'
    image.classList.add('destaques__image')
    return image
  }

  createContainer() {
    const container = document.createElement('div')
    container.classList.add('destaques__card')
    const image = this.createImage()
    const descricao = this.createDescrição()
    const btn = this.createButton()

    container.appendChild(image)
    container.appendChild(descricao)
    container.appendChild(btn)

    return container;
  }
}

for(let i = 0; i <= 2; i++) {
  const card = new Card('data')
  let container = card.createContainer()
  descricao.appendChild(container)
}
