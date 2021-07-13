module.exports = {
  get (request, response) {
    return response.render('vendas', {
      page: 'vendas'
    })
  }
}
