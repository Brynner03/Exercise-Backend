const Router = require('express').Router()
const controller = require('../controllers/WorkoutController')

Router.get('/', controller.GetAllWorkouts)


module.exports = Router