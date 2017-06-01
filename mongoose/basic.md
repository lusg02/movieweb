## Schema - 模式定义

```javascript
const mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema({
  doctor: String,
  title: String,
  language: String,
  country: String,
  year: Number,
  summary: String
})
```

## Model - 编译模型

```javascript
const mongoose = require('mongoose');
const MovieSchema = require('../schemas/movie');

let Movie = mongoose.model(
  'Movie',
  MovieSchema
)

module.exports = Movie
```

## Documents 

### -文档实例化

```javascript
const Movie = require('./models/movie');

let movie = new Movie({
  title: '机械战警',
  doctor: '何塞·帕迪利亚',
  year: 2018
});

movie.save(function (err) {
  if (err) return handlerError(err);
});
```

###  数据库批量查询

```javascript
const Movie = require('./models/movie');

app.get('/', (req, res) => {
  Movie
    .find({})
    // .findOne({_id: id})
    .exec((err, movies) => {
      res.render('index', {
        title: 'index page',
        movies: movies
      })
    })
});
```

### 数据库单条删除

```javascript
const Movie = require('./models/movie');

app.get('/', (req, res) => {
  Movie
    .remove({_id: id}, (err, movie) =>  err && console.log(err))
});
```



