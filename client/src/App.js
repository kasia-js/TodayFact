import React, { useState, useEffect } from 'react';
import './App.css';

import logo from './Wikipedia_logo_(svg).svg';

const baseURL = 'https://byabbe.se/on-this-day/1/20/events.json'
// const baseURL = 'http://localhost:3001';

const App = () => {
  const [facts, setFacts] = useState([]);
  const [day, setDay] = useState(20);
  const [month, setMonth] = useState(1);

  useEffect(() => { //perform data fetching after render
    fetch(`${baseURL}`)
    // fetch(`${baseURL}/facts/:month/:day/`)  
    .then(response => response.json())   
    .then(response => {
      console.log(response.events)
      setFacts(response.events) 
    }
      
      
    )
   
    
  },[]) //[] runs once only
  
  const factsList = facts.map(fact => (
    <>
      <div className="Facts">{fact.description}</div>
    </>
  ))




  return (
    <div className="Navigation">
      <header className="App-header">
        <h3>TodayFact</h3>
        <img src={logo} className="Wikipedia-logo" alt="logo" />      
      </header>
      <main>
  <div className="Facts-list">{factsList}</div>
      </main>
    </div>
  );
}

export default App;
