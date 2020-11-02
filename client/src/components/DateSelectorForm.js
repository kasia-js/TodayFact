import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

import DatePicker from './DatePicker';

function DateSelectorForm(props) {
  const [day, changeDay] = useState(props.day);
  const [month, changeMonth] = useState(props.month);

  useEffect(() => {
    dateChanged({day: props.day, month: props.month});
  }, [props.day, props.month]);

  const dateChanged = ({ day, month }) => {
    changeDay(day);
    changeMonth(month);
  };

  return (
    <div style={{padding:20}}>
      <DatePicker
        dateChanged={dateChanged}
        day={day}
        month={month} />
      <Button style={{width:'100%'}} variant="primary" onClick={() => props.getFacts(month, day)}>Search</Button>
    </div>
  );
}

export default DateSelectorForm;
