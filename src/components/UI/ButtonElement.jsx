import React from 'react';

import { Button } from 'reactstrap';

const ButtonElement = ({ onClick, className, name, type, href }) => {
  return (
    <>
      <Button type={type} href={href} onClick={onClick} className={className}>
        {name}
      </Button>
    </>
  );
};

export default ButtonElement;
