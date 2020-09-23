'use strict';
const axios = require('axios');

async function getFacts (req, res) { 
  try {
    const facts = await axios.get(`https://byabbe.se/on-this-day/${req.params.month}/${req.params.day}/events.json`); 
    res.status(200);
    res.send(facts.data);
  } catch (error) {
    console.log('Errror in getFacts', error); //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

module.exports = {getFacts}