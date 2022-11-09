import React from 'react';

import './main.scss';
import { Button } from 'reactstrap';

const ListElement = ({ list, setList, resetHandler }) => {
  return (
    <div className='result'>
      <ul className='result__list'>
        {list.map((item) => (
          <li key={item.id} id={item.id} className='result__item'>
            <span>
              {item.ingredient} {item.quantity} {item.unit}
            </span>{' '}
            <Button
              onClick={(e) =>
                setList(
                  list.filter(
                    (line) => line.id !== Number(e.target.parentElement.id)
                  )
                )
              }
              className='btn--delete-item'
            >
              delete
            </Button>
          </li>
        ))}
      </ul>
      {list.length === 0 ? (
        'No data'
      ) : (
        <Button onClick={resetHandler} className='btn--reset'>
          RESET
        </Button>
      )}
    </div>
  );
};

export default ListElement;
