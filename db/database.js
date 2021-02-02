const mongoose = require('mongoose');
const Promise = require('bluebird');

const uri = 'mongodb://35.187.251.22:27017/apimongo';


mongoose.set('debug', true);
mongoose.connect(uri);
mongoose.Promise = Promise;
module.exports = mongoose;
