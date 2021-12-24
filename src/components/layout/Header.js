import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AuthLink from '../auth/AuthLink';

const Header = ({ isLogged, onLogout, ...props }) => {
  return (
    <header {...props}>
      <Navbar bg="light" expand="lg" className="fixed-top header">
        <Navbar.Brand href="#home">Bored</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <AuthLink isLogged={isLogged} onLogout={onLogout} />
            <Nav.Link href="#about">Home</Nav.Link>
            <Nav.Link href="#tags">Tags</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Hashtags" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
