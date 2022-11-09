import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button, Form, Input } from 'reactstrap';
import './main.scss';

const baseUrl = 'http://localhost:3001/data';

const Main = () => {
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('cups');
  const [toConvertUnit, setToConvertUnit] = useState('cups');
  const [ingredient, setIngredient] = useState('');
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')));
  const [unitRef, setUnitRef] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setUnitRef(response.data);
    });
    getLocalLists();
  }, []);

  useEffect(() => {
    if (list.length >= 0) {
      localStorage.setItem('list', JSON.stringify(list));
    }
  }, [list]);

  const getLocalLists = () => {
    if (localStorage.getItem('list') === null) {
      localStorage.setItem('list', JSON.stringify([]));
    } else {
      let listLocal = JSON.parse(localStorage.getItem('list'));
      setList(listLocal);
    }
  };

  const unitList =
    unitRef !== []
      ? unitRef.map((unit) => unit.unit)
      : [
          'cups',
          'fl_oz',
          'grams',
          'lbs',
          'liters',
          'milliliters',
          'oz',
          'pints',
          'quarts',
          'tablespoons',
          'teaspoons',
        ];

  const convertHandler = (e) => {
    e.preventDefault();
    if (unitRef !== []) {
      const unitDb = unitRef.filter((u) => u.unit === unit)[0].value;
      const unitRefDb = unitRef.filter((u) => u.unit === toConvertUnit)[0]
        .value;
      const convertedQuantity = (quantity * unitRefDb) / unitDb;

      const listObject = {
        id: list.length + 1,
        ingredient: ingredient,
        unit: toConvertUnit,
        quantity: convertedQuantity.toFixed(2),
      };
      setList(list.concat(listObject));

      setIngredient('');
      setQuantity(0);
      setUnit('cups');
      setToConvertUnit('cups');
    }
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setList([]);
  };

  console.log(list);
  return (
    <div className='main'>
      <h1 className='title'>INGREDIENT MEASUREMENT CONVERTER</h1>

      <Form className='form' onSubmit={convertHandler}>
        <div className='inputlist'>
          <div className='input--available'>
            <h3>INGREDIENT</h3>
            <Input
              value={ingredient}
              required
              onChange={(e) => setIngredient(e.target.value)}
              className='input--ingredient'
            />
          </div>

          <div className='input--available'>
            <h3>QUANTITY</h3>
            <Input
              value={quantity}
              required
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              type='number'
              className='input--quantity'
            />
          </div>
          <div className='input--available'>
            <h3>UNIT</h3>
            <Input
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              type='select'
              className='input--unit'
            >
              {unitList.map((unit) => (
                <option key={unit}>{unit}</option>
              ))}
            </Input>
          </div>
          <div className='input--available'>
            <h3>CONVERTED UNIT</h3>
            <Input
              value={toConvertUnit}
              onChange={(e) => {
                setToConvertUnit(e.target.value);
              }}
              type='select'
              className='input--prefered-unit'
            >
              {unitList.map((unit) => (
                <option key={unit}>{unit}</option>
              ))}
            </Input>
          </div>
        </div>
        <Button type='submit' className='btn--convert'>
          CONVERT
        </Button>
      </Form>
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
    </div>
  );
};

export default Main;
