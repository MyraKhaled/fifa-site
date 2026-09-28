import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbarr() {
return (
    <Navbar expand="lg" className="mynav">
      <Container fluid>
        <img className='logo' src='/public/football.png'/>
        <Navbar.Brand href="#">FUT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" id='activate1'>Home</Nav.Link>
            <Nav.Link href="#action2" id='activate1'>Link</Nav.Link>
            <Nav.Link href="#action1" id='activate1'>Home</Nav.Link>
            <Nav.Link href="#action2" id='activate1'>Link</Nav.Link>
            <Nav.Link href="#action1" id='activate1'>Home</Nav.Link>
            <Nav.Link href="#action2" id='activate1'>Link</Nav.Link>
            
            
          </Nav>
          <Form className="mybutton">
            <Button variant="outline-success">JOIN A Team</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr