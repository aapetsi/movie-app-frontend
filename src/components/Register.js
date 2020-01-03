import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { keys_dev, keys_prod } from '../config/keys'

const { api } = process.env.NODE_ENV === 'production' ? keys_prod : keys_dev

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors({})
    axios
      .post(`${api}/api/users/register`, user)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        setErrors({ ...err.response.data })
      })
  }

  return (
    <div>
      <h4>Register</h4>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            name='username'
            type='text'
            onChange={handleChange}
            value={user.username}
            placeholder='Enter username'
          />
          {errors.username && (
            <Form.Text className='text-muted'>{errors.username}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='email'
            onChange={handleChange}
            value={user.email}
            type='email'
            placeholder='Enter email'
          />
          {errors.email && (
            <Form.Text className='text-muted'>{errors.email}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            onChange={handleChange}
            value={user.password}
            type='password'
            placeholder='Password'
          />
          {errors.password && (
            <Form.Text className='text-muted'>{errors.password}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password2'
            onChange={handleChange}
            value={user.password}
            type='password'
            placeholder='Confirm Password'
          />
          {errors.password2 && (
            <Form.Text className='text-muted'>{errors.password2}</Form.Text>
          )}
        </Form.Group>

        {errors.message && <p>{errors.message}</p>}

        <Button variant='primary' type='submit'>
          Register
        </Button>
      </form>
    </div>
  )
}

export default Register
