import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Image from 'next/image';

const home = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
       {/* <Image src="/public/images/udemy.jpg" /> */}
        <Navbar.Brand href="#home">Categories</Navbar.Brand>
        <input  type="input" id="exampleInputEmail1"  placeholder="Search for anything"  className='w-100 rounded rounded-2'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Udemy Business</Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
      </Container>
    </Navbar>
    </div>
  )
  
}
export default home