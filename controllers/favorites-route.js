const { default: Axios } = require('axios')
let app = require('express')
const db = require('../models')
const favorites = require('../models/favorites')
let apiKey = 'c4927d46648db6c2fb7393b2734c0eeb'
let movieURL = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`

app.get('/favorites', (req, res) => {
  let movie = axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=53,27,10751,35,18`
    )
    .then((response) => {
      const response = sqlRes.map(async (obj) => {
        const movie = await getMovieById(obj.movie_id)
        return { ...obj, movie }
      }, res.json(response))
    })
})

app.post('/favorites', (req, res) => {
  axios.post(movieURL)
  req.body(
    {
      username: 'foo',
      snack: 'Swedish fish',
      drink: 'Manhattan',
      movieId: 'abc124',
    },
    favorites.save(req.body)
  )
})

module.exports(app)
