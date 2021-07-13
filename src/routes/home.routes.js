const { Router } = require('express')

const homeRouter = Router()
const controller = require('../controller/home')

homeRouter.get('/', controller.get)

module.exports = homeRouter
