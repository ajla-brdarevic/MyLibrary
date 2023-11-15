const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const mongoose = require('mongoose')

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected'))
.catch((err) => console.log('Database not connected', err))

const app = express()

// Mount the authentication routes at the root endpoint ('/')
// It means that all routes defined in authRoutes will be prefixed with '/', for example, '/' + 'login' will be '/login'.
app.use('/', authRoutes)

const port = 8000
app.listen(port, () => console.log(`Server is running on port ${port}`))