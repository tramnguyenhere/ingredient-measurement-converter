import React from 'react';
import './header.scss';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import ButtonElement from '../UI/ButtonElement';

const Header = () => {
  return (
    <Navbar className='navbar__wrapper'>
      <NavbarBrand className='navbar__brand'>tramnguyenhere</NavbarBrand>
      <Nav>
        <ButtonElement
          name='SOURCE CODE'
          className='navbar__link--code'
          href='https://github.com/tramnguyenhere/ingredient-measurement-converter'
        />
        <ButtonElement
          name='CONTACT ME!'
          className='navbar__link--contact'
          href='/'
        />
      </Nav>
    </Navbar>
  );
};

export default Header;
