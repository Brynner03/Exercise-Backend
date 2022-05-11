const express = require('express')
const cors = require('cors')

const app = express()

// Routers
const AppRouter = require('./routes/AppRouter')
const AuthRouter = require('./routes/AuthRouter')
const DayRouter = require('./routes/DayRouter')
const UserRouter = require('./routes/UserRouter')
const WeekRouter = require('./routes/WeekRouter')
const WorkoutRouter = require('./routes/WorkoutRouter')


const PORT = process.env.PORT || 3023


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.use('/auth', AuthRouter)
app.use('/day', DayRouter)
app.use('/user', UserRouter)
app.use('/week', WeekRouter)
app.use('/workout', WorkoutRouter)


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))