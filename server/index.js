const express = require('express'), cors = require('cors'), bodyParser = require('body-parser')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:3000'}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'http://localhost:3000')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Redirect, Authorization")
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
})

const {Client} = require('pg')
const myClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'crud',
  password: 'blablabla5',
  port: 5432
})
myClient.connect()

app.get('/projects', async (req, res) => {
  const {rows} = await myClient.query({text: 'SELECT * FROM projectdeskdb.projects'})
  res.status(200).send(rows)
})

app.listen(8000, () => {
  console.log(new Date(), 'back have already launched')
})