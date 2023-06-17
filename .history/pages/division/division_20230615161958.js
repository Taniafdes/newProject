import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const division = () => {
  return (
    <div>
    <div style={{backgroundColor: 'black', padding: '40px'}}>
    <h4 style={{width: '150px', whiteSpace: 'nowrap', float: 'left', color: 'white'}}>Training 5 or more people?Get your team access to Udemy's top 22,000+ courses</h4>
    <Button variant="dark" style={{float: "right", paddingRight: 5}}>Get Udemy Business</Button>
    <Button variant="outline-light" style={{float: "right", paddingRight: 5}}>Dismiss</Button>
    </div>
    </div>

  )
}

export default division