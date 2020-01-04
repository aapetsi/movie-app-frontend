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
        console.log(res.data)
        setMovie(res.data)
      })
      .catch(err => {
        console.log(err.response)
      })
  }, [movieId])
  return (
    <div>
      <h4>{movie.title}</h4>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt='poster'
      />

      <p>{movie.overview}</p>
      <p>Genres</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MovieDetails
