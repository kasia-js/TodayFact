import React, { useState } from 'react';
import moment from 'moment';

import './App.css';
import './Form.css';

function Form(props) {
  // Form({getFacts, day, month})
  // const [day, changeDay] = useState(props.day);
  // const [month, changeMonth] = useState(props.month);
  //Code for input validation
  const [displayMonthInputError, setDisplayMonthInputError] = useState(false);
  const [displayDayInputError, setDisplayDayInputError] = useState(false); //initial value of displayDayInputError equal to false
  const [displayWrongDayInput, setDisplayWrongDayInput] = useState();
  const [displayWrongMonthInput, setDisplayWrongMonthInput] = useState();

  function handleDayChange(e) {
    if (!isNaN(e.target.value) != null) {
      setDisplayDayInputError(false);
      props.dateUpdated(e.target.value,props.month);
    } else {
      setDisplayDayInputError(true);
      setDisplayWrongDayInput(e.target.value);
      props.dateUpdated(e.target.value,props.month);
    }
  }

  function handleMonthChange(e) {
    if (
      !isNaN(e.target.value) &&
      e.target.value.match(/^([1-9]|1[0-2])$/) != null
    ) {
      setDisplayMonthInputError(false);
      props.dateUpdated(props.day,e.target.value);
    } else {
      setDisplayMonthInputError(true);
      setDisplayWrongMonthInput(e.target.value);
      props.dateUpdated(props.day,e.target.value);
    }
  }

  function print(e) {
    e.preventDefault();
    if (!displayMonthInputError && !displayDayInputError) {
      //both must be true, otherwise it checks only the first one
      console.log(props.day);
      console.log(props.month);
      props.getFacts(props.month, props.day);
    }
  }

  return (
    <form className='Form' onSubmit={print}>
      <label className='Heading-text'>Find facts for selected...</label>
      <label className='Day-label'>DAY</label>
      <input
        className='Day-input'
        type='number'
        name='day'
        min='1'
        max='31'
        value={props.day}
        onChange={handleDayChange}
      />
      <label className='Month-label'>MONTH</label>
      <input
        className='Month-input'
        type='number'
        name='month'
        min='1'
        max='12'
        value={props.month}
        onChange={handleMonthChange}
      />
      <button type='submit' className='Form-submit'>
        Search
      </button>
    </form>
  );
}

export default Form;
