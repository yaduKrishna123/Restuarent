import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://searchlogovector.com/wp-content/uploads/2018/06/food-club-since-1945-logo-vector.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        =Food Club
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header