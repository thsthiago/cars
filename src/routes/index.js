const { Router } = require('express')
const veiculosRouter = require('./veiculos.routes')

const routes = Router()

routes.use('/', veiculosRouter)

module.exports = routes
