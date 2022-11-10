import React from 'react';

import './main.scss';

import ButtonElement from '../UI/ButtonElement';

const ListElement = ({ list, deleteHandler, resetHandler }) => {
  if (!list) {
    return;
  }
  return (
    <div className='result'>
      <ul className='result__list'>
        {list.map((item) => (
          <li key={item.id} id={item.id} className='result__item'>
            <span>
              {item.ingredient} {item.quantity} {item.unit}
            </span>{' '}
            <ButtonElement
              onClick={deleteHandler}
              name='delete'
              className='btn--delete-item'
            />
          </li>
        ))}
      </ul>
      {list.length === 0 ? (
        'No data'
      ) : (
        <ButtonElement
          onClick={resetHandler}
          className='btn--reset'
          name='RESET'
        />
      )}
    </div>
  );
};

export default ListElement;
