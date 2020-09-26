import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './App.css';
import Form from './Form.js'
import logo from './Wikipedia_logo_(svg).svg';


// const baseURL = 'https://byabbe.se/on-this-day/1/20/events.json'
const baseURL = 'http://localhost:3001';

const App = () => {
  const [facts, setFacts] = useState([]);
  const [info, setInfo] = useState([]);
  let currentMonth = new Date().getMonth() + 1;
  let currentDay = new Date().getDate();

  useEffect(() => { //perform data fetching after render
    getFacts(currentMonth, currentDay)
  }, []) //[] runs once only

  function getFacts(month, day) {
    setInfo('loading...');
    setFacts([]);
    fetch(`${baseURL}/facts/${month}/${day}`)
      .then(response => response.json())
      .then(response =>
        setFacts(response.events))
      .then(() => setInfo(undefined))
  }

  const factsList = facts.map(fact => (
    <>
      <div className="Description">{fact.description}</div>
      {/* <div className="Year">{fact.year}</div> */}
    </>
  ))

  return (
    <>
      <header className="Navigation">
        <div>
          <div className="Title-big">TodayFacts by WIKIPEDIA. </div>
          <div className="Title-small">The Free Encyclopedia</div>
        </div>
        <img src={logo} className="Wikipedia-logo" alt="logo" />
        <Form className="Form" month={currentMonth} day={currentDay} getFacts={getFacts} />
      </header>
      <div className="Main-container">
        <div className="Tag-map">TagCloud</div>
        <div className="Facts-list">
          {
            info ? <div style={{ background: 'red', padding: 10 }}>{info}</div> : <></>
          }

          {factsList}
        </div>
      </div>
    </>
  );
}

export default App;
