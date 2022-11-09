import React from 'react';

import './main.scss';
import { Form, Button } from 'reactstrap';

import InputElement from './InputElement';

const FormElement = ({
  convertHandler,
  ingredient,
  setIngredient,
  quantity,
  setQuantity,
  unit,
  setUnit,
  toConvertUnit,
  setToConvertUnit,
  unitList,
}) => {
  return (
    <div>
      <Form className='form' onSubmit={convertHandler}>
        <div className='inputlist'>
          <InputElement
            type='text'
            name='INGREDIENT'
            item={ingredient}
            setItem={setIngredient}
          />
          <InputElement
            name='QUANTITY'
            item={quantity}
            setItem={setQuantity}
            type='number'
          />
          <InputElement
            name='UNIT'
            item={unit}
            setItem={setUnit}
            type='select'
            unitList={unitList}
          />
          <InputElement
            name='CONVERTED UNIT'
            item={toConvertUnit}
            setItem={setToConvertUnit}
            type='select'
            unitList={unitList}
          />
        </div>
        <Button type='submit' className='btn--convert'>
          CONVERT
        </Button>
      </Form>
    </div>
  );
};

export default FormElement;
