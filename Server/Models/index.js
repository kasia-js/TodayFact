'use strict';

const mongoose = require('mongoose');
const conf = require('../config');

mongoose.connect(`mongodb://localhost:27017/${conf.dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //eslint-disable-line no-console
db.once('open', function () {
  console.log('connected');  //eslint-disable-line no-console
});
module.exports = mongoose;