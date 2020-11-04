import React, { useState, useEffect } from 'react';
import FactNote from './FactNote';
import NavigationBar from './NavigationBar';
import DateSelectorForm from './DateSelectorForm';
import FrequentDatesCloud from './FrequentDatesCloud';
import apiClient from '../utils/APIClient';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [facts, setFacts] = useState([]);
  const [info, setInfo] = useState(undefined);
  const [frequentDates, setFrequentDates] = useState([]);
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const [day, setDay] = useState(currentDay);
  const [month, setMonth] = useState(currentMonth);

  useEffect(() => {
    getFacts(currentMonth, currentDay);
    getMostFrequentDates();
  }, []);

  const getFacts = async (month, day) => {
    setInfo('Loading...');
    apiClient
      .getFacts(month, day)
      .then((response) => {
        setFacts(response.events);
        setInfo(undefined);
      })
      .catch((error) => {
        setInfo(`Failed to read facts: ${error}`);
      });
  };

  const getMostFrequentDates = () => {
    apiClient.getFrequent().then((response) => {
      const mappedObject = response.map(({ date, count }) => ({
        value: date.split('&').join('/'),
        count: count
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
    <div className='body-container'>
      <NavigationBar />
      <div className='main-container'>
        <div className='left-container'>
          <DateSelectorForm
            className='form'
            month={month}
            day={day}
            getFacts={getFacts}
          />
          <FrequentDatesCloud
            frequentDates={frequentDates}
            dateSelected={tagCloudDateSelected}
          />
        </div>

        <div className='facts-list'>
          {info ? <div className='Info'>{info}</div> : null}
          {facts.map((fact) => (
            <FactNote fact={fact} key={fact.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
