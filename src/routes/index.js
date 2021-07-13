const { Router } = require('express')
const homeRouter = require('./home.routes')
const vendasRouter = require('./vendas.routes')

const routes = Router()

routes.use('/', homeRouter)
routes.use('/vendas', vendasRouter)

module.exports = routes
