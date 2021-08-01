const { Router } = require('express')
const controller = require('../controller/veiculo')

const veiculoRouter = Router()

veiculoRouter.get('/:id', controller.get)
veiculoRouter.get('/agendamento/:id', controller.agendamentoGet)

module.exports = veiculoRouter
