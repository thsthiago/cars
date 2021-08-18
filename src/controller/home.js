const data = [
  {
    modelo: 'Uno',
    versao: '1.6 8v, Gasolina, 2P, Manual',
    imageprincipal: {
      url: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    preco: 70
  },
  {
    nome: 'Pálio',
    versao: '1.6 8v, Gasolina, 2P, Manual',
    imageprincipal: {
      url: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    preco: 20
  },
  {
    nome: 'Fox',
    versao: '1.6 8v, Gasolina, 2P, Manual',
    imageprincipal: {
      url: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    preco: 40
  }
]

module.exports = {
  get: (request, response) => {
    return response.render('index', {
      page: 'home',
      data
    })
  }
}
