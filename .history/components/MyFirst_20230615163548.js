import React from 'react'
import Home from '../pages/home/home'
import NavBarComponent from '../pages/home/navbar'
import Division from '../pages/division/division'

function MyFirst() {
  return (
    <div>
        <NavBarComponent />
        <Home />
        <Division />
    </div>
  )
}

export default MyFirst
