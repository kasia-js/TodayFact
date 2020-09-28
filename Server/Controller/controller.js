'use strict';
const axios = require('axios');
const model = require('../Models/models');

async function getMostFrequentDates(req,res) {
  try {
    const factsFromDB = await model.find(); 
    //send only 10 most frequent
    let mostFrequentDates=factsFromDB.sort((a,b) => b.count - a.count).slice(0,11); 
    res.status(200);
    res.send(mostFrequentDates);      
  } catch (e) {
    console.log('Error', e); //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function getFacts (req, res) { 
  try {
    const day = req.params.day;
    const month = req.params.month;
    const facts = await axios.get(`https://byabbe.se/on-this-day/${month}/${day}/events.json`);    
    setCount(day,month);
    res.status(200);
    res.send(facts.data);
  } catch (error) {
    console.log('Errror in getFacts', error); //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function setCount (day, month) {
  //find if inputDate exists in DB
    const inputDate = `${day}&${month}`;
    const foundObject = await model.findOne({date:inputDate}).exec();
  if (foundObject) {
    //if yes update/increment count
    const toUpdate = {
      count: foundObject['count']+1
    };
    const updatedFact = await model.updateOne({date:inputDate}, toUpdate);

  } else {
    //if not create  
    const newFact = await model.create({
      date: `${day}&${month}`,
      count: 1,
    })
  }
}

module.exports = {getFacts, getMostFrequentDates}

