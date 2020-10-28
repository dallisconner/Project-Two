const express = require('express')

// *** import model database here (to use database functions) *** //

// Requiring our models and passport as we've configured it
const db = require('../models')

module.exports = function (app) {
  // gets home page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/quiz.html'))
  })
}
