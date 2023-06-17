import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import Image from 'next/image';

const NavBarComponent = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
       <Image src="/images/udemy.jpg" width={100} height={100} />
        <Navbar.Brand href="#home">Categories</Navbar.Brand>
        <input type="input" id="exampleInputEmail1"  placeholder="   Search for anything"  className='w-100 rounded rounded-5'/>
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
    <Navbar bg="light" expand="lg">
      <Nav >
            <Nav.Link href="#home">Development</Nav.Link>
            <Nav.Link href="#link">Business</Nav.Link>
            <Nav.Link href="#link">Finance & Accounting</Nav.Link>
            <Nav.Link href="#home">IT & Software</Nav.Link>
            <Nav.Link href="#link">Office Productivity</Nav.Link>
            <Nav.Link href="#link">Personal Development</Nav.Link>
            </Nav>
    </Navbar>
    </div>
  )
  
}
export default NavBarComponent