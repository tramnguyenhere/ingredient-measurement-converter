import React from 'react';

import { Input } from 'reactstrap';
import './main.scss';

const InputElement = ({ name, type, item, setItem, unitList }) => {
  if (type !== 'select') {
    return (
      <div>
        <div className='input--available'>
          <h3>{name}</h3>
          <Input
            type={type}
            value={item}
            required
            onChange={(e) => setItem(e.target.value)}
            className='input--ingredient'
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className='input--available'>
          <h3>{name}</h3>
          <Input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type='select'
            className='input--unit'
          >
            {unitList.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </Input>
        </div>
      </div>
    );
  }
};

export default InputElement;
