const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('underscore');
const path = require('path');
const Movie = require('./models/movie');

// mongodb启动后默认端口27017
mongoose.connect('mongodb://localhost:27017/mongodb');
console.log('MongoDB connection success!');

let port = process.env.PORT || 3000;
let app = express();

app.locals.moment = require('moment');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './views/pages/');
app.set('view engine', 'pug');

app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(port);
console.log(`app running at localhost:${port}`);

// index page
app.get('/', (req, res) => {
  Movie.fetch((err, movies) => {
    err && console.log(err);

    res.render('index', {
      title: 'movieweb 首页',
      movies: movies
    });
  });
});

// detail page
app.get('/movie/:id', (req, res) => {
  let id = req.params.id;

  Movie.findById(id, (err, movie) => {
    res.render('detail', {
      title: 'movieweb' + movie.title,
      movie: movie
    });
  })
});

// 后台录入页
app.get('/admin/movie', (req, res) => {
  res.render('admin', {
    title: 'admin page 后台录入页',
    movie: {
      title: '',
      doctor: '',
      country: '',
      year: '',
      poster: '',
      flash: '',
      summary: '',
      language: ''
    }
  });
});

// admin update movie
app.get('/admin/update/:id', (req, res) => {
  let id = req.params.id;

  if (id) {
    Movie.findById(id, function (err, movie) {
      res.render('admin', {
        title: 'movieweb 后台更新页',
        movie: movie
      });
    });
  }
});

// admin post movie 后台录入提交
app.post('/admin/movie/new', (req, res) => {
  let id = req.body.movie._id;
  let movieObj = req.body.movie;
  let _movie;

  if (id !== 'undefined' && id !== '') {
    Movie.findById(id, (err, movie) => {
      err && console.log(err);

      _movie = _.extend(movie, movieObj);

      _movie.save((err, movie) => {
        err && console.log(err);
        res.redirect(`/movie/${movie._id}`);
      });
    });
  } else {
    _movie = new Movie({
      doctor: movieObj.doctor,
      title: movieObj.title,
      country: movieObj.country,
      language: movieObj.language,
      year: movieObj.year,
      poster: movieObj.poster,
      summary: movieObj.summary,
      flash: movieObj.flash
    });

    _movie.save((err, movie) => {
      err && console.log(err);

      res.redirect(`/movie/${movie._id}`);
    });
  }
});

// list page
app.get('/admin/list', (req, res) => {
  Movie.fetch((err, movies) => {
    err && console.log(err);

    res.render('list', {
      title: 'movieweb 列表页',
      movies: movies
    });
  });
});

// list delete movie
app.delete('/admin/list', (req, res) => {
  let id = req.query.id;
  if (id) {
    Movie.remove({_id: id}, (err, movie) => {
      err && console.log(err);
      res.json({success: 1});
    });
  }
});