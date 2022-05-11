const Router = require('express').Router()
const controller = require('../controllers/WeekController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllWeeks)
Router.get('/:id', controller.GetWeeksByPk)
Router.post('/create', controller.CreateWeek)
Router.put('/edit/:id', middleware.stripToken,middleware.verifyToken,controller.UpdateWeek)
Router.delete('/:id', middleware.stripToken,middleware.verifyToken,controller.DestroyWeek)
Router.get('/user/:user_id', controller.GetWeekByUser)

module.exports = Router