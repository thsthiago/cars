module.exports = {
  get: (request, response) => {
    return response.render('sobre', {
      page: 'sobre'
    })
  }
}
