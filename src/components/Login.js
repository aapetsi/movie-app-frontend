import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors({})
    console.log(user)
    axios
      .post('/api/users/login', user)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        setErrors({ ...err.response.data })
      })
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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

        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login
