'use strict'

const _ = require('lodash') // https://lodash.com/docs/4.17.4
const assert = require('assert')

const database = require('./database.json')
const groupHats = (searchHatId) => {
  return database.reduce((acc, seller) => {
    seller.hats.forEach(hat => {
      const hatId = searchHatId || hat.id
      if (!acc[hatId]) acc[hatId] = 0
      if (hat.id === hatId) acc[hatId] += 1
    })

    return acc
  }, {})
}
const findTotalHatsSold = ({ hats = {}, top = 3 }) => {
  let total = 0
  _.orderBy(hats).reverse().slice(0, top).forEach(totalHat => {
    total += totalHat
  })
  return total
}

const hats = groupHats()
const total = findTotalHatsSold({ hats, top: 3 })

// Throws error on failure
assert.equal(total, 23, `Invalid result: ${total} != 23`)

console.log('Success!')

/**
 * Time and space complexity in O() notation is:
 *   - time complexity: TODO
 *   - space complexity: TODO
 */
