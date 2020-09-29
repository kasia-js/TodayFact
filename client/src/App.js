import React, { useState, useEffect } from 'react';
// import moment from 'moment';
import './App.css';
import Form from './Form.js';
import logo from './Wikipedia_logo_(svg).svg';

import { TagCloud } from 'react-tagcloud';

// const baseURL = 'https://byabbe.se/on-this-day/1/20/events.json'
const baseURL = 'http://localhost:3001';

const App = () => {
  const [facts, setFacts] = useState([]);
  const [info, setInfo] = useState([]);
  const [frequentDates, setFrequentDates] = useState([]);
  let currentMonth = new Date().getMonth() + 1;
  let currentDay = new Date().getDate();
  const [day, setDay] = useState(currentDay);
  const [month, setMonth] = useState(currentMonth);

  useEffect(() => {
    //perform data fetching after render
    getFacts(currentMonth, currentDay);
    getMostFrequentDates();
  }, []); //[] runs once only

  function getFacts(month, day) {
    setInfo('Loading...');
    setFacts([]);
    fetch(`${baseURL}/facts/${month}/${day}`) //promise resolved in response object
      .then((response) => response.json()) // reads the response stream to completion and parses the response as json
      .then((response) => setFacts(response.events))
      .then(() => setInfo(undefined));
  }

  function getMostFrequentDates() {
    fetch(`${baseURL}/frequent`)
      .then((response) => response.json())
      .then((response) => {
        const mappedObject = response.map(({ date, count }) => ({
          value: date.split('&').join('/'),
          count: count,
        }));
        setFrequentDates(mappedObject);
        console.log(mappedObject); // return value of console.log is undefined
      });
  }

  const factsList = facts.map((fact) => (
    <>
      <div className='Description'>{fact.description} </div>
      {/* {fact.year} */}
    </>
  ));

  function onTagCloudClick(dayMonth) {
    const dayMonthArray = dayMonth.split('/');
    const day = parseInt(dayMonthArray[0]);
    const month = parseInt(dayMonthArray[1]);
    console.log(day);
    console.log(typeof day);
    setDay(day);
    setMonth(month);
    getFacts(month, day);
  }

  return (
    <div className="Body-container">
      <header className='Navigation'>
        <img src={logo} className='Wikipedia-logo' alt='logo' />
        <div>
          <div className='Title-big'>
            <b className='pinkText'>TodayFacts</b> by WIKIPEDIA.
          </div>
          <div className='Title-small'>The Free Encyclopedia</div>
        </div>
      </header>
      <div className='Main-container'>
        <div className='Left-container'>
          <Form className='Form' month={month} day={day} getFacts={getFacts} />
          <label className='Heading-text-TagCloud'>
            {/* The most popular dates... */}
          </label>
          <TagCloud
            className='TagCloud'
            minSize={10}
            maxSize={60}
            tags={frequentDates}
            disableRandomColor={true}
            onClick={(tag) => onTagCloudClick(tag.value)}
          />
        </div>

        <div className='Facts-list'>
          {info ? <div className='Info'>{info}</div> : <></>}
          {factsList}
        </div>
      </div>
    </div>
  );
};

export default App;
