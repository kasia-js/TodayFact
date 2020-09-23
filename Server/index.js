'use strict'
const express = require('express');
const cors = require('cors');
const router = require('./Router/router');

const app = express();

app.use(cors());
// app.use(express.json());
app.use(router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); //eslint-disable-line no-console
})
