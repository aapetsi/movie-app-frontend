import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = props => {
  const { id, title, release_date, overview, poster_path } = props.movie
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='poster' />
      <p>Overview: {overview}</p>
      <p>Release date: {release_date}</p>
    </div>
  )
}

export default MovieCard
