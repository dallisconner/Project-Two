const { default: Axios } = require('axios')
let app = require('express')
const { baseURL, moviePath, apiKey } = require('../constants')
const db = require('../models')
const favorites = require('../models/favorites')

/**
 *
 * @param {string} id
 */
let getMoviebyId = (id) => {
  return Axios.get(`${baseURL}${moviePath}/${id}?api_key=${apiKey}`)
}

app.get('/favorites', (req, res) => {})

app.post('/favorites', (req, res) => {})

module.exports(app)
