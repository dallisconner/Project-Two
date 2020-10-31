const { default: Axios } = require('axios')
const { baseURL, moviePath, apiKey } = require('../constants')
const db = require('../models')

/**
 *
 * @param {string} id
 */
let getMoviebyId = (id) => {
  return Axios.get(`${baseURL}${moviePath}/${id}?api_key=${apiKey}`)
}

module.exports = (app) => {
  /**
   * Method: GET
   * Path: /favorites
   */

  app.get('/favorites', (req, res) => {
    db.Favorite.findAll().then((data) => {
      Promise.all(
        data.map((favorite) => {
          return getMoviebyId(favorite.movie)
            .then((movie) => {
              return {
                movie: movie.data,
                snack: favorite.snack,
                drink: favorite.drink,
              }
            })
            .catch((error) => {
              console.log(error)
            })
        })
      )
        .then((response) => {
          res.json(response)
        })
        .catch((err) => {
          return res
            .status(500)
            .json({ error: true, message: 'something went wrong' })
        })
    })
  })

  /**
   * Method: POST
   * Path: /favorites
   * Request Body: {
   *    snack: String,
   *    drink: String,
   *    movie: Number(TMDB movie id)
   * }
   */
  app.post('/favorites', (req, res) => {
    if (!req.body.snack || !req.body.drink || !req.body.movie) {
      return res
        .status(400)
        .json({ error: true, message: 'invalid request body' })
    }
    db.Favorite.create({
      snack: req.body.snack,
      drink: req.body.drink,
      movie: req.body.movie,
    })
      .then(() => {
        res.json({ success: true })
      })
      .catch((err) => {
        return res
          .status(500)
          .json({ error: true, message: 'something went wrong' })
      })
  })
}
