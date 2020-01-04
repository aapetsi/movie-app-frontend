import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src='/logo.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </div>
  )
}

export default Header
