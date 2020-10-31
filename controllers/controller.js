var path = require('path')

// ROUTES ---------

module.exports = function (app) {
  // gets home page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.handlebars'))
  })

  app.get('/browse', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/browse.handlebars'))
  })

  app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/quiz.html'))
  })
}
