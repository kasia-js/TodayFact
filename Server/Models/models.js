'use strict';
const mongoose = require('./index');

const Schema = mongoose.Schema;

const factSchema = new Schema({
  date: { type: String },
  count: { type: Number }
});

const InputFact = mongoose.model('Facts', factSchema);
module.exports = InputFact;
