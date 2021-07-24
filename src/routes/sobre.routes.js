const { Router } = require('express')

const sobreRouter = Router()
const controller = require('../controller/sobre')

sobreRouter.get('/', controller.get)

module.exports = sobreRouter
