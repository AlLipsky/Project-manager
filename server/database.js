const {pgSettings} = require('./constants')
const {Client} = require('pg')

const database = () => {
  const myClient = new Client(pgSettings)
  myClient.connect()

  return myClient
}

module.exports = database()
