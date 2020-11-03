'use strict';
const express = require('express');
const cors = require('cors');
const path = require('path');

const config = require('./Server/config');
const router = require('./Server/Router/router');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(router);

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`); //eslint-disable-line no-console
});
