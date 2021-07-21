const data = [
  {
    nome: 'Uno',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Pálio',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    nome: 'Fox',
    info: '1.6 8v, Gasolina, 2P, Manual',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
]

module.exports = {
  get (request, response) {
    return response.render('vendas', {
      page: 'vendas',
      data
    })
  }
}
