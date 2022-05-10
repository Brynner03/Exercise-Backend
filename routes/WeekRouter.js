const Router = require('express').Router()
const controller = require('../controllers/WeekController')

Router.get('/', controller.GetAllWeeks)
Router.get('/:id', controller.GetWeeksByPk)
Router.post('/:id', controller.CreateWeek)
Router.put('/edit/:id', controller.UpdateWeek)
Router.delete('/:id', controller.DestroyWeek)
Router.get('/user/:user_id', controller.GetWeekByUser)

module.exports = Router