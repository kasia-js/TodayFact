import React, { useState } from 'react';
import moment from 'moment';

import './App.css';

function Form(props) {
  // Form({getFacts, day, month})
  const [day, changeDay] = useState(props.day);
  const [month, changeMonth] = useState(props.month);
  const [displayMonthInputError,setDisplayMonthInputError] = useState(false);
  const [displayDayInputError, setDisplayDayInputError] = useState(false); //initial value of displayDayInputError equal to false
  const [displayWrongDayInput, setDisplayWrongDayInput] = useState();
  const [displayWrongMonthInput, setDisplayWrongMonthInput] = useState();
  
  function handleDayChange(e) {
    if(!isNaN(e.target.value) != null) {
      setDisplayDayInputError(false);
      changeDay(e.target.value);
    } else {
      setDisplayDayInputError(true);
      setDisplayWrongDayInput(e.target.value);
      changeDay(e.target.value);
    }
  }

  function handleMonthChange(e) {    
      if(!isNaN(e.target.value) && e.target.value.match(/^([1-9]|1[0-2])$/) != null) {      
        setDisplayMonthInputError(false);
        changeMonth(e.target.value);
      } else {
        setDisplayMonthInputError(true);
        setDisplayWrongMonthInput(e.target.value)
        changeMonth(e.target.value);
      }  
  }
  
  function print(e) {
    e.preventDefault();
    if(!displayMonthInputError && !displayDayInputError) { //both must be true, otherwise it checks only the first one
      console.log(day);
      console.log(month);
      props.getFacts(month,day);
    }
  }

  return (
    <form className="Form" onSubmit={print}>
      <h3>Find facts for selected date...</h3>
      <label>DAY</label>
      <input type="number" name="day" min="1" max="31"value={day} onChange={handleDayChange} />
      <label>MONTH</label>     
      <input type="number" name="month" min="1" max="12" value={month} onChange={handleMonthChange}/>
      <button type="submit" className="Form-submit" >Create</button>
    </form>
  )
}

export default Form

 
