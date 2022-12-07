const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res, next) => {
    try {
      const allMovies = await Movie.find();
      res.render('movies', { movies: allMovies });
    } catch (error) {
      console.log('error', error);
      next(error);
    }
  });
  
  router.get('/movies/:movieId', async (req, res, next) => {
    try {
      // console.log(req.params);
      const { movieId } = req.params;
  
      const movie = await Movie.findById(movieId);
      res.render('seeds/movies.seed', movie);
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;