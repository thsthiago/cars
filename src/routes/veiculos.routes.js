const { Router } = require('express')

const veiculosRouter = Router()
const controller = require('../controller/veiculos')

veiculosRouter.get('/', controller.get)

module.exports = veiculosRouter
