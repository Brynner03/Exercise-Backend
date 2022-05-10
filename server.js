const express = require('express')
const cors = require('cors')

const app = express()

// Routers
const AppRouter = require('./routes/AppRouter')
const WorkoutRouter = require('./routes/WorkoutRouter')
const UserRouter = require('./routes/UserRouter')


const PORT = process.env.PORT || 3023


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.use('/workout', WorkoutRouter)
app.use('/user', UserRouter)


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))