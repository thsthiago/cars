const { Router } = require('express')
const homeRouter = require('./home.routes')
const vendasRouter = require('./vendas.routes')
const sobreRouter = require('./sobre.routes')
const veiculoRouter = require('./veiculo.routes')

const routes = Router()

routes.use('/', homeRouter)
routes.use('/vendas', vendasRouter)
routes.use('/sobre', sobreRouter)
routes.use('/veiculo', veiculoRouter)

module.exports = routes
