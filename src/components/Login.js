import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { keys_dev, keys_prod } from '../config/keys'

const { api } = process.env.NODE_ENV === 'production' ? keys_prod : keys_dev

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors({})
    axios
      .post(`${api}/api/users/login`, user)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        setErrors({ ...err.response.data })
      })
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Login
