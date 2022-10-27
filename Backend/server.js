const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDb = require('./config/db')
const port = process.env.PORT || 5000

connectDb()

const app = express()

// initialing body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// calling our routes and requiring the file we want to render
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

// server listen on a port
app.listen(port, () => console.log(`server started on port ${port}`))