const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)
Router.get('/:id', controller.GetUserByPk)
Router.post('/create', controller.CreateUser)
Router.put('/edit/:id', controller.UpdateUser)
Router.delete('/:id', controller.DestroyUser)

module.exports = Router