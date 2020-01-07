import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { keys_dev, keys_prod } from '../config/keys'

const { api } = process.env.NODE_ENV === 'production' ? keys_prod : keys_dev

const MovieDetails = props => {
  const movieId = props.match.params.id
  const [movie, setMovie] = useState({})
  const [genres, setGenres] = useState([])
  const [actors, setActors] = useState([])

  useEffect(() => {
    Axios.get(`${api}/api/movies/${movieId}`)
      .then(res => {
        const movieDetails = res.data
        const movieId = res.data.id
        setGenres(movieDetails.genres)
        setMovie(movieDetails)
        Axios.get(`${api}/api/movies/${movieId}/cast`)
          .then(response => {
            setActors(response.data)
          })
          .catch(err => {
            console.log(err)
          })
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
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <h2>Cast</h2>
      {actors.map(actor => (
        <div>
          <img src={`http://image.tmdb.org/t/p/w500${actor.profile_path}`} />
          <h3>{actor.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default MovieDetails
