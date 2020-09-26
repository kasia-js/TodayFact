import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './App.css';
import Form from './Form.js'
import logo from './Wikipedia_logo_(svg).svg';


// const baseURL = 'https://byabbe.se/on-this-day/1/20/events.json'
const baseURL = 'http://localhost:3001';

const App = () => {
  const [facts, setFacts] = useState([]);
  let currentMonth = new Date().getMonth() + 1;
  let currentDay = new Date().getDate();
 
  useEffect(() => { //perform data fetching after render
    getFacts(currentMonth,currentDay)    
  },[]) //[] runs once only

  function getFacts(month,day) {
    fetch(`${baseURL}/facts/${month}/${day}`)
    .then(response => response.json())
    .then(response =>
    setFacts(response.events))
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
        <h3 className = "Title">TodayFacts by WIKIPEDIA. <br></br>The Free Encyclopedia</h3>
        <img src={logo} className="Wikipedia-logo" alt="logo" /> 
        <button type="submit" className="Mode-button" >The Dark Mode <br></br><span className="small">* Click here to activate</span></button> 
      </header>
      <div className="Main-container">
        <div>
          <Form className="Form" month={currentMonth} day={currentDay} getFacts={getFacts}/>
          <img src={logo} className="Tag-map"></img>
        </div>
        <div className="Facts-list">{factsList}</div>
      </div>
   </>
  );
}

export default App;
