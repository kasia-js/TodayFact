'use strict';
const express = require('express');
const controller = require('../Controller/controller');

const router = express.Router();
router.get('/facts/:month/:day/', controller.getFacts);
router.get('/frequent', controller.getMostFrequentDates);

module.exports = router;
