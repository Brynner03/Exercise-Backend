const express = require('express')
const cors = require('cors')

const app = express()

// Routers



const PORT = process.env.PORT || 3023


app.use(cors())
app.use(express.json())





app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))