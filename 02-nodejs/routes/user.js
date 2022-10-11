const express = require('express')
const router = new express.Router()
const MAX_LIMIT = 100
const User = require('../models/User')
const { usersJsonToCsv } = require('../utils/users.js')

router.route('/users').get(async (req, res) => {
  let { page = 1, limit = MAX_LIMIT } = req.query
  if (limit > MAX_LIMIT) limit = MAX_LIMIT

  const [pageNumber, limitNumber] = [page, limit].map(Number)

  const users = await User.find({})
    .limit(limitNumber)
    .skip((pageNumber - 1) * limitNumber)
    .lean()
  const usersCsv = usersJsonToCsv(users)

  res.header('Content-Type', 'text/csv')
  res.attachment('users.csv')
  res.status(200).send(usersCsv)
})

module.exports = router
