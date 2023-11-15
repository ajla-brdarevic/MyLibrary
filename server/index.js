const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

const app = express()

// Mount the authentication routes at the root endpoint ('/')
// It means that all routes defined in authRoutes will be prefixed with '/', for example, '/' + 'login' will be '/login'.
app.use('/', authRoutes)

const port = 8000
app.listen(port, () => console.log(`Server is running on port ${port}`))