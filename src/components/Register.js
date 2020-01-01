import React, { useState } from 'react'
import axios from 'axios'
import keys_prod from '../config/keys_prod'
import keys_dev from '../config/keys_dev'

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
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name='username'
          type='text'
          onChange={handleChange}
          value={user.username}
        />
        {errors.username && <p>{errors.username}</p>}

        <label>Email</label>
        <input
          name='email'
          type='email'
          onChange={handleChange}
          value={user.email}
        />
        {errors.email && <p>{errors.email}</p>}

        <label>Password</label>
        <input
          name='password'
          type='password'
          onChange={handleChange}
          value={user.password}
        />
        {errors.password && <p>{errors.password}</p>}

        <label>Confirm Password</label>
        <input
          name='password2'
          type='password'
          onChange={handleChange}
          value={user.password2}
        />
        {errors.password2 && <p>{errors.password2}</p>}

        {errors.message && <p>{errors.message}</p>}

        <input type='submit' value='Register' />
      </form>
    </div>
  )
}

export default Register
