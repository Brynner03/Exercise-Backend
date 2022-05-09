const { Workout } = require('../models')

const GetAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.findAll()
        res.send(workouts)
        } catch (error) {
        throw error
        }
}









module.exports = {
    GetAllWorkouts
}