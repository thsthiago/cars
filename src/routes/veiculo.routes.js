const { Router } = require('express')
const controller = require('../controller/veiculo')

const veiculoRouter = Router()

veiculoRouter.get('/:id', controller.get)

module.exports = veiculoRouter
