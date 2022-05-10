const { Workout } = require('../models')

const GetAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.findAll()
        res.send(workouts)
        } catch (error) {
        throw error
        }
}
const GetWorkoutByPk = async (req, res) => {
    try {
        const workout = await Workout.findByPk(req.params.id)
        res.send(workout)
    } catch (error) {
        throw error
    }
}
const CreateWorkout = async (req, res) => {
    try {
        let workoutId = parseInt(req.params.id)
        let workoutBody = {
            workoutId,
            ...req.body
        }
        let workout = await Workout.create(workoutBody)
        res.send(workout)
    } catch (error) {
        throw error
    }
}
const UpdateWorkout = async (req, res) => {
    try {
        let workoutId = parseInt(req.params.id)
        let updateWorkout = await Workout.update(req.body, {
            where: {id: workoutId},
            returning: true
        })
        res.send(updateWorkout)
    } catch (error) {
        throw error
    }
}
const DestroyWorkout = async (req, res) => {
    try {
        let workoutId = parseInt(req.params.id)
        await Workout.destroy({
            where: {id: workoutId}
        })
        res.send({ message: `Deleted workout with an id of ${workoutId}`})
    } catch (error) {
        throw error
    }
}
const GetWorkoutByUser = async (req, res) => {
    try {
        let userId = req.params.user_id
        const usersWorkout = await Workout.findAll({
            where: {user_id: userId}
        })
        res.send(usersWorkout)
    } catch (error) {
        throw error
    }
}





module.exports = {
    GetAllWorkouts,
    GetWorkoutByPk,
    CreateWorkout,
    UpdateWorkout,
    DestroyWorkout,
    GetWorkoutByUser
}