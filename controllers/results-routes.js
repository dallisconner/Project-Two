const { default: Axios } = require('axios')
const { discoverPath, apiKey, baseURL } = require('../constants')
const { randomItem } = require('../utils')

let genres = {
  horror: 27,
  thriller: 53,
  family: 10751,
  comedy: 35,
  drama: 18,
}

let drinks = {
  beer: ['Corona', 'Pernicious', 'Hazy Little Thing', 'Good Morning Vietnam'],
  whiskey: ['Jack and Coke', 'Whiskey Sour', 'Old Fashioned', 'Whiskey Ginger'],
  kidFriendly: ['Apple Cider', 'Chocolate Milk', 'Beetlejuice', 'Sprite'],
}

let snacks = {
  chocolate: ['m&ms', 'kitkat', 'reeses'],
  fruity: ['skittles', 'sour patch', 'starburst'],
  salty: ['Chocolate covered pretzels', 'Chips', 'Popcorn'],
}

/**
 *
 * @param {number} genre
 */
let getMoviesByGenre = (genre) => {
  return Axios.get(
    `${baseURL}${discoverPath}?api_key=${apiKey}&with_genres=27,${genre}`
  )
}

module.exports = function (app) {
  /**
   * Method: POST
   * Path: /results
   * Request Body: {
   *    snack: String(keys in snacks object),
   *    drink: String(keys in drinks object),
   *    genre: String(keys in genres object)
   * }
   */
  app.post('/results', (req, res) => {
    // req.body: { snack: 'chocolate', drink: 'whiskey', genre: 25 }
    if (!req.body.snack || !req.body.drink || !req.body.genre) {
      return res
        .status(400)
        .json({ error: true, message: 'invalid request body' })
    }
    const snack = randomItem(snacks[req.body.snack])
    const drink = randomItem(drinks[req.body.drink])
    getMoviesByGenre(genres[req.body.genre])
      .then((response) => {
        const movie = randomItem(response.data.results)
        res.json({ snack, drink, movie })
      })
      .catch(() => {
        return res
          .status(500)
          .json({ error: true, message: 'something went wrong' })
      })
  })
}
