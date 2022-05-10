const Router = require('express').Router()
const controller = require('../controllers/DayController')

Router.get('/', controller.GetAllDays)
Router.get('/:id', controller.GetDaysByPk)
Router.post('/:id', controller.CreateDay)
Router.put('/edit/:id', controller.UpdateDay)
Router.delete('/:id', controller.DestroyDay)
Router.get('/user/:user_id', controller.GetDayByUser)

module.exports = Router
