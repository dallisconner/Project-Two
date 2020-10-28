let express = require('express')
let exphbs = require('express-handlebars')
let path = require('path')
require('dotenv').config()
let db = require('./models')

let app = express()
let PORT = process.env.PORT || 8080

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.static(path.join(__dirname, '/public/assets')))
app.use(express.static(path.join(__dirname, '/models')))

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/browse', function (req, res) {
  res.render('browse')
})

app.get('/quiz', function (req, res) {
  res.sendFile(path.join(__dirname, './models/quiz.html'))
})

app.get('/', function (req, res) {
  res.render('index')
})

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT)
    console.log('Api Key: ' + process.env.apiKey)
  })
})
