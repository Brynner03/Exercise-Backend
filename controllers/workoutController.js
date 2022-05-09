const { Workout } = require('../models')

const GetAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.findAll()
        res.send(workouts)
        console.log('All workouts are rendering')
    } catch (error) {
        throw error
    }
}









module.exports = {
    GetAllWorkouts
}