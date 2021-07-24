const { Router } = require('express')
const homeRouter = require('./home.routes')
const vendasRouter = require('./vendas.routes')
const sobreRouter = require('./sobre.routes')

const routes = Router()

routes.use('/', homeRouter)
routes.use('/vendas', vendasRouter)
routes.use('/sobre', sobreRouter)

module.exports = routes
