import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Heart from './Heart';
import Store from '../utils/FavoriteStore';

function FactNote (props) {
  const [open, setOpen] = useState(false);

  const handleFavoriteClick = (selected) => {
    if (selected) {
      Store.addFavorite(props.fact);
    } else {
      Store.removeFavorite(props.fact);
    }
  };

  return (
    <div style={{ padding: 10 }}>
      <div className='card'>
        <div className='card-header'>
          <div style={{ color: 'black' }}>
            <div style={{ float: 'right', marginTop: 0 }}>
              year {props.fact.year}
              &nbsp;
              <Heart onClick={handleFavoriteClick} />
            </div>
            {props.fact.description}
          </div>
          <a href='#' onClick={() => setOpen(!open)}>
            {open ? 'Hide' : 'Show'} related links &raquo;
          </a>
        </div>

        <Collapse in={open} style={{ paddingTop: 10 }}>
          <ul>
            {props.fact.wikipedia.map((link) => (
              <li>
                <a href={link.wikipedia}>{link.title}</a>
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default FactNote;
