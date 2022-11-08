import React from 'react';
import { Button } from 'reactstrap';
import './main.css';

const Main = () => {
  return (
    <div className='main'>
      <h1 className='title'>INGREDIENT MEASUREMENT CONVERTER</h1>
      <div className='inputlist'>
        <div className='input--available'>
          <h3>INGREDIENT</h3>
          <input className='input--ingredient' />
        </div>
        <div className='input--available'>
          <h3>UNIT</h3>
          <input className='input--ingredient' />
        </div>
        <div className='input--available'>
          <h3>QUANTITY</h3>
          <input className='input--ingredient' />
        </div>
        <div className='input--available'>
          <h3>PREFERRED UNIT</h3>
          <input className='input--ingredient' />
        </div>
        <Button className='btn--convert'>CONVERT</Button>
        <div className='result'>
          <ul className='result__list'>
            <li className='result__item'>
              Carrot <span>1 cup</span>{' '}
              <Button className='btn--delete-item'>delete</Button>
            </li>
            <li className='result__item'>
              Carrot <span>1 cup</span>{' '}
              <Button className='btn--delete-item'>delete</Button>
            </li>
            <li className='result__item'>
              Carrot <span>1 cup</span>{' '}
              <Button className='btn--delete-item'>delete</Button>
            </li>
          </ul>
          <Button className='btn--reset'>RESET</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
