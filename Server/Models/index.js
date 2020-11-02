'use strict';

const mongoose = require('mongoose');
const { dbUrl, dbName } = require('../config');

mongoose.connect(`${dbUrl}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', () => console.error('connection error:')); //eslint-disable-line no-console
db.once('open', () => console.log('connected')); //eslint-disable-line no-console

module.exports = mongoose;
