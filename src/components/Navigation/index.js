import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';

import NavItems from './NavItems';


import Logo from '../../assets/images/logolbm.png';

const Header = ({ nav, langs, lang, changeLang }) => (
  <Navbar bg='dark' expand='lg' variant='dark' className='py-1' fixed='top'>
    <Container>
      <Navbar.Brand href="#home">
        <Image src={Logo} height='35' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <NavItems nav={nav} />
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header
