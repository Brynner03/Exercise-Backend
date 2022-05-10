const Router = require('express').Router()

const UserRouter = require('./UserRouter')
// const DayRouter = require('./DayRouter')
// const WeekRouter = require('./WeekRouter')
const WorkoutRouter = require('./WorkoutRouter')


// Router.use('/day', DayRouter)
Router.use('/user', UserRouter)
Router.use('/workout', WorkoutRouter)

module.exports = Router