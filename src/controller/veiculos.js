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
  }
]

const depoimentos = [
  {
    descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
    nisi hic perferendis necessitatibus beatae natus, ducimus sint nihil deserunt
    enim fugit est! Soluta molestias nisi incidunt mollitia quaerat voluptate libero.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi hic perferendis
    necessitatibus beatae natus, ducimus sint nihil deserunt enim fugit est! Soluta molestias
    nisi incidunt mollitia quaerat voluptate libero`,
    author: 'Thiago Cabral'
  },
  {
    descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
    nisi hic perferendis necessitatibus beatae natus, ducimus sint nihil deserunt
    enim fugit est! Soluta molestias nisi incidunt mollitia quaerat voluptate libero.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi hic perferendis
    necessitatibus beatae natus, ducimus sint nihil deserunt enim fugit est! Soluta molestias
    nisi incidunt mollitia quaerat voluptate libero`,
    author: 'Eleandra Cabral'
  },
  {
    descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
    nisi hic perferendis necessitatibus beatae natus, ducimus sint nihil deserunt
    enim fugit est! Soluta molestias nisi incidunt mollitia quaerat voluptate libero.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi hic perferendis
    necessitatibus beatae natus, ducimus sint nihil deserunt enim fugit est! Soluta molestias
    nisi incidunt mollitia quaerat voluptate libero`,
    author: 'Aparecido Cabral'
  }
]

module.exports = {
  get: (request, response) => {
    return response.render('index', {
      data,
      depoimentos
    })
  }
}
