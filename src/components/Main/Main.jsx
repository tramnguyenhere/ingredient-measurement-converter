import React, { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';
import './main.css';
// import axios from 'axios';

const Main = () => {
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('');
  const [toConvertUnit, setToConvertUnit] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [list, setList] = useState([]);

  let data = {
    cups: quantity,
    fl_oz: quantity,
    grams: quantity,
    lbs: quantity,
    liters: quantity,
    milliliters: quantity,
    oz: quantity,
    pints: quantity,
    quarts: quantity,
    tablespoons: quantity,
    teaspoons: quantity,
  };
  const unitList = [
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

  switch (unit) {
    case 'grams':
      return (data = {
        cups: quantity * (0.38461474192307676 / 50),
        fl_oz: quantity * (3.076917935384614 / 50),
        grams: quantity,
        lbs: quantity * (0.110231 / 50),
        liters: quantity * (0.09099538461538458 / 50),
        milliliters: quantity * (90.99538461538458 / 50),
        oz: quantity * (1.7637 / 50),
        pints: quantity * (0.1923078259384615 / 50),
        quarts: quantity * (0.09615391296923075 / 50),
        tablespoons: quantity * (6.153835870769228 / 50),
        teaspoons: quantity * (18.461507612307685 / 50),
      });
    case 'cups':
      return (data = {
        cups: quantity,
        fl_oz: quantity * (3.076917935384614 / 0.38461474192307676),
        grams: quantity * (50 / 0.38461474192307676),
        lbs: quantity * (0.110231 / 0.38461474192307676),
        liters: quantity * (0.09099538461538458 / 0.38461474192307676),
        milliliters: quantity * (90.99538461538458 / 0.38461474192307676),
        oz: quantity * (1.7637 / 0.38461474192307676),
        pints: quantity * (0.1923078259384615 / 0.38461474192307676),
        quarts: quantity * (0.09615391296923075 / 0.38461474192307676),
        tablespoons: quantity * (6.153835870769228 / 0.38461474192307676),
        teaspoons: quantity * (18.461507612307685 / 0.38461474192307676),
      });
    case 'fl_oz':
      return (data = {
        cups: quantity * (0.38461474192307676 / 3.076917935384614),
        fl_oz: quantity,
        grams: quantity * (50 / 3.076917935384614),
        lbs: quantity * (0.110231 / 3.076917935384614),
        liters: quantity * (0.09099538461538458 / 3.076917935384614),
        milliliters: quantity * (90.99538461538458 / 3.076917935384614),
        oz: quantity * (1.7637 / 3.076917935384614),
        pints: quantity * (0.1923078259384615 / 3.076917935384614),
        quarts: quantity * (0.09615391296923075 / 3.076917935384614),
        tablespoons: quantity * (6.153835870769228 / 3.076917935384614),
        teaspoons: quantity * (18.461507612307685 / 3.076917935384614),
      });
    case 'lbs':
      return (data = {
        cups: quantity * (0.38461474192307676 / 0.110231),
        fl_oz: quantity * (3.076917935384614 / 0.110231),
        grams: quantity * (50 / 0.110231),
        lbs: quantity,
        liters: quantity * (0.09099538461538458 / 0.110231),
        milliliters: quantity * (90.99538461538458 / 0.110231),
        oz: quantity * (1.7637 / 0.110231),
        pints: quantity * (0.1923078259384615 / 0.110231),
        quarts: quantity * (0.09615391296923075 / 0.110231),
        tablespoons: quantity * (6.153835870769228 / 0.110231),
        teaspoons: quantity * (18.461507612307685 / 0.110231),
      });
    case 'liters':
      return (data = {
        cups: quantity * (0.38461474192307676 / 0.09099538461538458),
        fl_oz: quantity * (3.076917935384614 / 0.09099538461538458),
        grams: quantity * (50 / 0.09099538461538458),
        lbs: quantity * (0.110231 / 0.09099538461538458),
        liters: quantity,
        milliliters: quantity * (90.99538461538458 / 0.09099538461538458),
        oz: quantity * (1.7637 / 0.09099538461538458),
        pints: quantity * (0.1923078259384615 / 0.09099538461538458),
        quarts: quantity * (0.09615391296923075 / 0.09099538461538458),
        tablespoons: quantity * (6.153835870769228 / 0.09099538461538458),
        teaspoons: quantity * (18.461507612307685 / 0.09099538461538458),
      });
    case 'milliliters':
      return (data = {
        cups: quantity * (0.38461474192307676 / 90.99538461538458),
        fl_oz: quantity * (3.076917935384614 / 90.99538461538458),
        grams: quantity * (50 / 90.99538461538458),
        lbs: quantity * (0.110231 / 90.99538461538458),
        liters: quantity * (0.09099538461538458 / 90.99538461538458),
        milliliters: quantity,
        oz: quantity * (1.7637 / 90.99538461538458),
        pints: quantity * (0.1923078259384615 / 90.99538461538458),
        quarts: quantity * (0.09615391296923075 / 90.99538461538458),
        tablespoons: quantity * (6.153835870769228 / 90.99538461538458),
        teaspoons: quantity * (18.461507612307685 / 90.99538461538458),
      });
    case 'oz':
      return (data = {
        cups: quantity * (0.38461474192307676 / 1.7637),
        fl_oz: quantity * (3.076917935384614 / 1.7637),
        grams: quantity * (50 / 1.7637),
        lbs: quantity * (0.110231 / 1.7637),
        liters: quantity * (0.09099538461538458 / 1.7637),
        milliliters: quantity * (90.99538461538458 / 1.7637),
        oz: quantity,
        pints: quantity * (0.1923078259384615 / 1.7637),
        quarts: quantity * (0.09615391296923075 / 1.7637),
        tablespoons: quantity * (6.153835870769228 / 1.7637),
        teaspoons: quantity * (18.461507612307685 / 1.7637),
      });
    case 'pints':
      return (data = {
        cups: quantity * (0.38461474192307676 / 0.1923078259384615),
        fl_oz: quantity * (3.076917935384614 / 0.1923078259384615),
        grams: quantity * (50 / 0.1923078259384615),
        lbs: quantity * (0.110231 / 0.1923078259384615),
        liters: quantity * (0.09099538461538458 / 0.1923078259384615),
        milliliters: quantity * (90.99538461538458 / 0.1923078259384615),
        oz: quantity * (1.7637 / 0.1923078259384615),
        pints: quantity,
        quarts: quantity * (0.09615391296923075 / 0.1923078259384615),
        tablespoons: quantity * (6.153835870769228 / 0.1923078259384615),
        teaspoons: quantity * (18.461507612307685 / 0.1923078259384615),
      });
    case 'quarts':
      return (data = {
        cups: quantity * (0.38461474192307676 / 0.09615391296923075),
        fl_oz: quantity * (3.076917935384614 / 0.09615391296923075),
        grams: quantity * (50 / 0.09615391296923075),
        lbs: quantity * (0.110231 / 0.09615391296923075),
        liters: quantity * (0.09099538461538458 / 0.09615391296923075),
        milliliters: quantity * (90.99538461538458 / 0.09615391296923075),
        oz: quantity * (1.7637 / 0.09615391296923075),
        pints: quantity * (0.1923078259384615 / 0.09615391296923075),
        quarts: quantity,
        tablespoons: quantity * (6.153835870769228 / 0.09615391296923075),
        teaspoons: quantity * (18.461507612307685 / 0.09615391296923075),
      });
    case 'tablespoons':
      return (data = {
        cups: quantity * (0.38461474192307676 / 6.153835870769228),
        fl_oz: quantity * (3.076917935384614 / 6.153835870769228),
        grams: quantity * (50 / 6.153835870769228),
        lbs: quantity * (0.110231 / 6.153835870769228),
        liters: quantity * (0.09099538461538458 / 6.153835870769228),
        milliliters: quantity * (90.99538461538458 / 6.153835870769228),
        oz: quantity * (1.7637 / 6.153835870769228),
        pints: quantity * (0.1923078259384615 / 6.153835870769228),
        quarts: quantity * (0.09615391296923075 / 6.153835870769228),
        tablespoons: quantity,
        teaspoons: quantity * (18.461507612307685 / 6.153835870769228),
      });
    case 'teaspoons':
      return (data = {
        cups: quantity * (0.38461474192307676 / 18.461507612307685),
        fl_oz: quantity * (3.076917935384614 / 18.461507612307685),
        grams: quantity * (50 / 18.461507612307685),
        lbs: quantity * (0.110231 / 18.461507612307685),
        liters: quantity * (0.09099538461538458 / 18.461507612307685),
        milliliters: quantity * (90.99538461538458 / 18.461507612307685),
        oz: quantity * (1.7637 / 18.461507612307685),
        pints: quantity * (0.1923078259384615 / 18.461507612307685),
        quarts: quantity * (0.09615391296923075 / 18.461507612307685),
        tablespoons: quantity * (6.153835870769228 / 18.461507612307685),
        teaspoons: quantity,
      });
    default:
      break;
  }

  const convertHandler = (e) => {
    e.preventDefault();
    setList(
      list.concat({
        id: list.length + 1,
        ingredient: { ingredient },
        quantity: data[toConvertUnit],
        unit: { toConvertUnit },
      })
    );
  };
  //Fetch API (due to financial shortage, we will not use this option in the current time)
  /*
  const fetchData = async () => {
    const res = await axios.get(
      `https://food-unit-of-measurement-converter.p.rapidapi.com/convert?unit=${unit}&ingredient=${ingredient}&value=${quantity}`,
      {
        headers: {
          'X-RapidAPI-Key': 'x',
          'X-RapidAPI-Host':
            'food-unit-of-measurement-converter.p.rapidapi.com',
        },
      }
    );
    const unitData = await res.data;
    console.log(unitData);
    return res.data;
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */

  return (
    <div className='main'>
      <h1 className='title'>INGREDIENT MEASUREMENT CONVERTER</h1>
      <Form onSubmit={convertHandler}>
        <div className='inputlist'>
          <div className='input--available'>
            <h3>INGREDIENT</h3>
            <Input
              onChange={(e) => setIngredient(e.target.value)}
              className='input--ingredient'
            />
          </div>

          <div className='input--available'>
            <h3>QUANTITY</h3>
            <Input
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
        <div className='result'>
          <ul className='result__list'>
            {list.map((item) => (
              <li key={item.id} className='result__item'>
                <span>
                  {item.ingredient} {item.quantity} {item.unit}
                </span>{' '}
                <Button className='btn--delete-item'>delete</Button>
              </li>
            ))}
          </ul>
          <Button className='btn--reset'>RESET</Button>
        </div>
      </Form>
    </div>
  );
};

export default Main;
