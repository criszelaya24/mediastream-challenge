'use strict'

const express = require('express')
const userRoutes = require('./routes/user')

// Setup Express.js app
const app = express()
app.get('/', (req, res) => res.status(200).send({ status: 'Connected!' }))
app.use(userRoutes)

app.all('*', (req, res) => {
  res.status(404).send({ info: 'Endpoint not found' })
})

module.exports = app
