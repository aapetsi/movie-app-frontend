import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { keys_dev, keys_prod } from '../config/keys'

const { api } = process.env.NODE_ENV === 'production' ? keys_prod : keys_dev

const MovieDetails = props => {
  const movieId = props.match.params.id
  const [movie, setMovie] = useState({})

  useEffect(() => {
    Axios.get(`${api}/api/movies/${movieId}`)
      .then(res => {
        const movieDetails = res.data
        setMovie(movieDetails)
      })
      .catch(err => {
        console.log(err.response)
      })
  }, [movieId, movie])

  return (
    <div>
      <h4>{movie.title}</h4>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt='poster'
      />
      <p>{movie.overview}</p>
      <p>Genres</p>
    </div>
  )
}

export default MovieDetails
