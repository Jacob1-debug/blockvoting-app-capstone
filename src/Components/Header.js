import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand href='/'>
        <img src={BlockVoteLogo}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mx-auto'></Nav>
        <Nav>
          <Nav.Link href='/NewPoll'>New Poll</Nav.Link>
          <Nav.Link onClick={window.accountId === "" ? login : logout}>
            {window.accountId === "" ? "Login" : window.accountId}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header