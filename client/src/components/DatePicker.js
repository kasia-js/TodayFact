import React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function DatePicker (props) {
  const nowDate = new Date();
  const day = props.day || nowDate.getDate();
  const month = props.month || nowDate.getMonth() + 1;

  const dateChanged = (obj) => {
    if (props.dateChanged) {
      props.dateChanged({
        month,
        day,
        ...obj
      });
    }
  };

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Day</Form.Label>
          <Form.Control
            as='select'
            custom
            onChange={(e) => dateChanged({ day: e.target.value })}
          >
            {Array.from({ length: 31 }, (_, index) => (
              <option selected={index + 1 === day ? 1 : null}>
                {index + 1}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Month</Form.Label>
          <Form.Control
            as='select'
            custom
            onChange={(e) => dateChanged({ month: e.target.value })}
          >
            {months.map((name, index) => (
              <option
                value={index + 1}
                selected={index + 1 === month ? 1 : null}
              >
                {name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default DatePicker;
