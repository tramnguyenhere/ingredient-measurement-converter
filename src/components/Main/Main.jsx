import React from 'react';
import { Button, Input } from 'reactstrap';
import './main.css';

const Main = () => {
  return (
    <div className='main'>
      <h1 className='title'>INGREDIENT MEASUREMENT CONVERTER</h1>
      <div className='inputlist'>
        <div className='input--available'>
          <h3>INGREDIENT</h3>
          <Input className='input--ingredient' />
        </div>
        <div className='input--available'>
          <h3>UNIT</h3>
          <Input type='select' className='input--unit'>
            <option>cup</option>
            <option>ml</option>
            <option>l</option>
            <option>tsp</option>
            <option>tp</option>
          </Input>
        </div>
        <div className='input--available'>
          <h3>QUANTITY</h3>
          <Input type='number' className='input--quantity' />
        </div>
        <div className='input--available'>
          <h3>PREFERRED UNIT</h3>
          <Input type='select' className='input--prefered-unit'>
            <option>cup</option>
            <option>ml</option>
            <option>l</option>
            <option>tsp</option>
            <option>tp</option>
          </Input>
        </div>
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
  );
};

export default Main;
