let express = require('express')
let exphbs = require('express-handlebars')
let path = require('path')
const favoritesRoute = require('./controllers/favorites-route')
const resultsRoutes = require('./controllers/results-routes')
require('dotenv').config()
let db = require('./models')
let app = express()
let PORT = process.env.PORT || 8080

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.static(path.join(__dirname, '/public/assets')))
app.use(express.static(path.join(__dirname, '/public/js')))
app.use(express.static(path.join(__dirname, '/models')))

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/browse', function (req, res) {
  res.render('browse')
})

app.get('/quiz', function (req, res) {
  res.sendFile(path.join(__dirname, './public/quiz.html'))
  // res.render('quiz')
})

app.get('/results', function (req, res) {
  res.render('results')
})

app.get('/', function (req, res) {
  res.render('index')
})

resultsRoutes(app)
favoritesRoute(app)

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT)
  })
})
