import React from 'react';
import './header.css';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Button } from 'reactstrap';

const Header = () => {
  return (
    <Navbar className='navbar__wrapper'>
      <NavbarBrand className='navbar__brand'>tramnguyenhere</NavbarBrand>
      <Nav>
        <Button className='navbar__link--code' href='/'>
          Source code
        </Button>
        <Button className='navbar__link--contact' href='/'>
          Contact me!
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Header;
