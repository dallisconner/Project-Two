var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')
require('dotenv').config()

var app = express()
var PORT = process.env.PORT || 8080

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, '/public/assets')));

app.use(express.static(path.join(__dirname, '/models')));

app.get("/about", function(req, res) {
  res.render("about");
});

app.get('/browse', function (req, res) {
  res.render('browse')
})

app.get("/quiz", function(req, res) {
  res.sendFile(path.join(__dirname, './models/quiz.html'))
});

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
  console.log('Api Key: ' + process.env.apiKey)
})
