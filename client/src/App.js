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
      .then(() => setInfo(undefined))
  }
  
  function getMostFrequentDates() {
    fetch(`${baseURL}/frequent`)
    .then((response) => response.json())

   
    .then(response => {      
      console.log(response)
      setFrequentDates(response)

    })
  }
  
  const factsList = facts.map((fact) => (
    <>
      <div className='Description'>{fact.description}</div>
      {/* <div className="Year">{fact.year}</div> */}
    </>
  ));

  // filter as per factsList to get data for TagCloud
  // const frequentDatesList = frequentDates.map((frequentDate) => (
  //   <>
  //     <div>{frequentDate.date, frequent.count}</div> 
  //   </>

  // ));

  return (
    <>
      <header className='Navigation'>
        <div>
          <div className='Title-big'>TodayFacts by WIKIPEDIA. </div>
          <div className='Title-small'>The Free Encyclopedia</div>
        </div>
        <img src={logo} className='Wikipedia-logo' alt='logo' />
        <Form
          className='Form'
          month={currentMonth}
          day={currentDay}
          getFacts={getFacts}
        />
      </header>
      <div className='Main-container'>
        {/* {frequentDatesList} */}
        {/* <TagCloud 
        minSize={12}
        maxSize={35}
        tags={frequentDatesList}
        className="simple-cloud"
        onClick={tag => alert(`'${tag.value}' was selected!`)}
      />         */}
        <div className='Facts-list'>
          {info ? <div className='Info'>{info}</div> : <></>}
          {factsList}
        </div>
      </div>
    </>
  );
};

export default App;
