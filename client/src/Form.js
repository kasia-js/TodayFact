import React, { useState } from 'react';
import moment from 'moment';

import './App.css';

function Form(props) {
  // Form({getFacts, day, month})
  const [day, changeDay] = useState(props.day);
  const [month, changeMonth] = useState(props.month);

  function handleMonthChange(e) {
    changeMonth(e.target.value);
  }
  function handleDayChange(e) {
    changeDay(e.target.value);
  }

  
  function print(e) {
    e.preventDefault();
    console.log(day);
    console.log(month);
    props.getFacts(month,day);
  }
  return (
    <form className="form" onSubmit={print}>
      <h3>Find facts for selected date...</h3>
      <label>MONTH</label>
      <input type="text" name="month" value={month} onChange={handleMonthChange}/>
      <label>DAY</label>
      <input type="datetime-local" name="day" value={day} onChange={handleDayChange} />
      <button type="submit" className="form-submit" >Create</button>
    </form>
  )
}

export default Form

