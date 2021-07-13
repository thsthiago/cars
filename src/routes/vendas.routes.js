const { Router } = require('express')

const vendasRouter = Router()
const controller = require('../controller/vendas')

vendasRouter.get('/', controller.get)

module.exports = vendasRouter
