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
            <Nav.Link href="#link">Tech on Udemy</Nav.Link>
            <Nav.Link href="#link">My Learning</Nav.Link>
            <i class="bi bi-heart"></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar>
      <Container>
      <Nav className="pl-2 pr-2">
            <Nav.Link href="#home">Development</Nav.Link>
            <Nav.Link href="#link">Business</Nav.Link>
            <Nav.Link href="#link">Finance & Accounting</Nav.Link>
            <Nav.Link href="#home">IT & Software</Nav.Link>
            <Nav.Link href="#link">Office Productivity</Nav.Link>
            <Nav.Link href="#link">Personal Development</Nav.Link>
            </Nav>
      </Container>
    </Navbar>
    </div>
  )
  
}
export default home