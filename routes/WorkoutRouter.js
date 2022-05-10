const Router = require('express').Router()
const controller = require('../controllers/WorkoutController')

Router.get('/', controller.GetAllWorkouts)
Router.get('/:id', controller.GetWorkoutByPk)
Router.post('/:id', controller.CreateWorkout)
Router.put('/edit/:id', controller.UpdateWorkout)
Router.delete('/:id', controller.DestroyWorkout)
Router.get('/user/:user_id', controller.GetWorkoutByUser)


module.exports = Router