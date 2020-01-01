import React, { useState } from 'react'
import axios from 'axios'

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
      .post('/api/users/register', user)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        setErrors({ ...err.response.data })
      })
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name='username'
          type='text'
          onChange={handleChange}
          value={user.username}
        />

        <label>Email</label>
        <input
          name='email'
          type='email'
          onChange={handleChange}
          value={user.email}
        />

        <label>Password</label>
        <input
          name='password'
          type='password'
          onChange={handleChange}
          value={user.password}
        />

        <label>Confirm Password</label>
        <input
          name='password2'
          type='password'
          onChange={handleChange}
          value={user.password2}
        />

        <input type='submit' value='Register' />
      </form>
    </div>
  )
}

export default Register
