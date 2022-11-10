import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import './main.scss';

import FormElement from './FormElement';
import ListElement from './ListElement';

const baseUrl = 'http://localhost:3001/data';

const Main = () => {
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('cups');
  const [toConvertUnit, setToConvertUnit] = useState('cups');
  const [ingredient, setIngredient] = useState('');
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')));
  const [unitRef, setUnitRef] = useState([]);

  //Fetch unit reference in database and list result in local store
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setUnitRef(response.data);
    });
    getLocalLists();
  }, []);
  //---

  //Save list result in local storage
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
  //---

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

  // Function Handler
  const convertHandler = (e) => {
    e.preventDefault();
    if (unitRef !== []) {
      const unitDb = unitRef.filter((u) => u.unit === unit)[0].value;
      const unitRefDb = unitRef.filter((u) => u.unit === toConvertUnit)[0]
        .value;
      const convertedQuantity = (quantity * unitRefDb) / unitDb;

      const listObject = {
        id: uuid(),
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

  const deleteHandler = (e) => {
    setList(
      list.filter((line) => line.id !== Number(e.target.parentElement.id))
    );
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setList([]);
  };
  //---

  return (
    <div className='main'>
      <h1 className='title'>INGREDIENT MEASUREMENT CONVERTER</h1>
      <FormElement
        unitList={unitList}
        ingredient={ingredient}
        setIngredient={setIngredient}
        quantity={quantity}
        setQuantity={setQuantity}
        unit={unit}
        setUnit={setUnit}
        toConvertUnit={toConvertUnit}
        setToConvertUnit={setToConvertUnit}
        convertHandler={convertHandler}
      />
      <ListElement
        list={list}
        deleteHandler={deleteHandler}
        resetHandler={resetHandler}
      />
    </div>
  );
};

export default Main;
