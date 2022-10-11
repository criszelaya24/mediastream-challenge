const { Parser } = require('json2csv')
const fields = [{ label: 'Name', value: 'name' },
  { label: 'Email', value: 'email' }, { label: 'ID', value: '_id' }]
const usersJsonToCsv = (users) => {
  const data = users.map(user => {
    const { name, email, _id } = user

    return {
      name,
      email,
      _id
    }
  })

  const json2csv = new Parser({ fields })
  const csv = json2csv.parse(data)

  return csv
}

module.exports = { usersJsonToCsv }
