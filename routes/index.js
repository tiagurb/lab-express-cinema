const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/*const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    res.render('movies', { movies: allMovies });
  } catch (error) {
    console.log('error', error);
    next(error);
  }
});*/

module.exports = router;
