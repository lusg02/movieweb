const mongoose = require('mongoose');
const MovieSchema = require('../schemas/movie');

// 生成Movie模型
let Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;

