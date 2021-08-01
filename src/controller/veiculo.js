const data = {
  name: 'Uno',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend
  isse ac tincidunt lorem. Nulla condimentum et dolor et convallis. Mauris egestas
  ligula in pharetra venenatis. Etiam pharetra ipsum libero, vitae dignissim tortor
  imperdiet et. Aenean in tellus lorem ligula in pharetra venenatis. Etiam pharetra
  ipsum libero, vitae dignissim tortor imperdiet et. Aenean in tellus lorem ligula
  in pharetra venenatis. Etiam pharetra ipsum libero, vitae dignissim tortor imperdiet
  et. Aenean in tellus lorem.`,
  yearModel: '2020/2020',
  km: 100,
  exchange: 'manual',
  license: 'Não',
  images: [
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/7245219/pexels-photo-7245219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  ],
  sellerName: 'Thiago Cabral'
}

module.exports = {
  get: (request, response) => {
    return response.render('veiculo', {
      page: 'veiculo',
      data
    })
  },
  agendamentoGet: (request, response) => {
    return response.render('agendamento', {
      page: 'agendamento'
    })
  }
}
