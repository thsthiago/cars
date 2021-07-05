const { Router } = require('express')
const veiculosRouter = require('./veiculos.routes')

const routes = Router()

routes.use('/veiculos', veiculosRouter)

module.exports = routes
