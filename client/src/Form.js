import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';
import './Form.css';

function Form(props) {
  // Form({getFacts, day, month})
  const [day, changeDay] = useState(props.day);
  const [month, changeMonth] = useState(props.month);
  //Code for input validation
  const [displayMonthInputError, setDisplayMonthInputError] = useState(false);
  const [displayDayInputError, setDisplayDayInputError] = useState(false); //initial value of displayDayInputError equal to false
  const [displayWrongDayInput, setDisplayWrongDayInput] = useState();
  const [displayWrongMonthInput, setDisplayWrongMonthInput] = useState();

  useEffect( () => {
    changeDay(props.day);
    changeMonth(props.month);
  }, [props.day, props.month])

  function handleDayChange(e) {
    if (!isNaN(e.target.value) != null) {
      setDisplayDayInputError(false);
      changeDay(e.target.value);
    } else {
      setDisplayDayInputError(true);
      setDisplayWrongDayInput(e.target.value);
      changeDay(e.target.value);
    }
  }

  function handleMonthChange(e) {
    if (
      !isNaN(e.target.value) &&
      e.target.value.match(/^([1-9]|1[0-2])$/) != null
    ) {
      setDisplayMonthInputError(false);
      changeMonth(e.target.value);
    } else {
      setDisplayMonthInputError(true);
      setDisplayWrongMonthInput(e.target.value);
      changeMonth(e.target.value);
    }
  }

  function print(e) {
    e.preventDefault();
    if (!displayMonthInputError && !displayDayInputError) {
      //both must be true, otherwise it checks only the first one
      console.log(day);
      console.log(month);
      props.getFacts(month, day);
    }
  }

  return (
    <form className='Form' onSubmit={print}>
      <label className='Heading-text'>Find facts for selected...</label>
      <label className='Day-label'>Day</label>
      <input
        className='Day-input'
        type='number'
        name='day'
        min='1'
        max='31'
        value={day}
        onChange={handleDayChange}
      />

      <label className='Month-label'>Month</label>
      <input
        className='Month-input'
        type='number'
        name='month'
        min='1'
        max='12'
        value={month}
        onChange={handleMonthChange}
      />
      <button type='submit' className='Form-submit'>
        Search
      </button>
    </form>
  );
}

export default Form;
