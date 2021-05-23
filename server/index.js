const express = require('express'), cors = require('cors'), bodyParser = require('body-parser')
const app = express()
const {origin, port} = require('./constants')
const {database} = require('./database')

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors({origin: origin}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", origin)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Redirect, Authorization")
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
})

app.get('/projects', async (req, res) => {
  const {rows} = await database.query({text: 'SELECT * FROM projectdeskdb.projects'})
  res.status(200).send(rows)
})

app.listen(port, () => {
  console.log(new Date(), 'back have already launched')
})