'use strict';
const axios = require('axios');
const model = require('../Models/models');

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
    // foundObject.count = 5;
    const toUpdate = {
      count: foundObject['count']+1
    };
    // let a = 5;
    // let b = a++;

    // console.log(a); // 6
    // console.log(b); // 5

    // /*
    // let b = a++;
    // ||
    // let tmp = a;
    // a = a+1;
    // b = tmp;

    // let b = ++a;
    // ||
    // a=a+1
    // b = a;
    // */
    // console.log(x); // 5
    // console.log(foundObject.count); // 6
    // console.log(toUpdate.count); // 5
    const updatedFact = await model.updateOne({date:inputDate}, toUpdate);

  } else {
    //if not create  
    const newFact = await model.create({
      date: `${day}&${month}`,
      count: 1,
    })
  }
}

module.exports = {getFacts}

