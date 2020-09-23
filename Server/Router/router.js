'use strict';
const router = require('express').Router();
const fact = require('../Controller/controller');

router.get('/facts/:month/:day/',fact.getFacts);

module.exports = router;