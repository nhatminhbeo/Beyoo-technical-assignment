const mongoose = require('mongoose');
const Promise = require('bluebird');

const uri = 'mongodb+srv://BeyooRW:Booye123@cluster0.v4zac.mongodb.net/Beyoo';


mongoose.set('debug', true);
mongoose.connect(uri);
mongoose.Promise = Promise;
module.exports = mongoose;
