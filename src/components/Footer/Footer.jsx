import React from 'react';

import './footer.scss';
import { Navbar, NavbarText } from 'reactstrap';

const Footer = () => {
  return (
    <Navbar className='footer'>
      <NavbarText className='footer--text'>
        Copyright 2022 © tramnguyenhere
      </NavbarText>
    </Navbar>
  );
};

export default Footer;
