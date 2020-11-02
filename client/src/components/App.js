import React, { useState, useEffect } from 'react';
import FactNote from './FactNote';
import NavigationBar from './NavigationBar';
import DateSelectorForm from './DateSelectorForm';
import FrequentDatesCloud from './FrequentDatesCloud';

import apiClient from '../utils/APIClient';

import 'bootstrap/dist/css/bootstrap.min.css';


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

  const getFacts = (month, day) => {
    setInfo('Loading...');
    apiClient.getFacts(month, day)
      .then((response) => {
        setFacts(response.events);
        setInfo(undefined);
      }).catch((error) => {
        setInfo(`Failed to read facts: ${error}`);
      });
  };

  const getMostFrequentDates = () => {
    apiClient.getFrequent()
      .then((response) => {
        const mappedObject = response.map(({ date, count }) => ({
          value: date.split('&').join('/'),
          count: count,
        }));
        setFrequentDates(mappedObject);
      });
  };

  const tagCloudDateSelected = (day, month) => {
    setDay(day);
    setMonth(month);
    getFacts(month, day);
  };

  return (
    <div className='Body-container'>
      <NavigationBar />

      <div className='Main-container'>
        <div className='Left-container'>
          <DateSelectorForm className='Form' month={month} day={day} getFacts={getFacts} />
          <FrequentDatesCloud frequentDates={frequentDates} dateSelected={(day, month) => tagCloudDateSelected(day, month)} />
        </div>

        <div className='Facts-list'>
          {info ? <div className='Info'>{info}</div> : <></>}
          {facts.map((fact) => <FactNote fact={fact} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
