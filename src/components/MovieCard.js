import React from 'react'

const MovieCard = props => {
  const { title, release_date, overview, poster_path } = props.movie
  return (
    <div>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='poster' />
      <p>Overview: {overview}</p>
      <p>Release date: {release_date}</p>
    </div>
  )
}

export default MovieCard
