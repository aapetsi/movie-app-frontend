import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { keys_prod, keys_dev } from '../config/keys'
import MovieList from './MovieList'

const { api } = process.env.NODE_ENV === 'production' ? keys_prod : keys_dev

const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get(`${api}/api/movies`)
      .then(res => {
        setMovies([res.data])
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <div>
      <h1>Home page component</h1>
      <MovieList movies={movies} />
    </div>
  )
}

export default HomePage
