import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>MovieList component</h2>
      {movies.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </div>
  )
}

export default MovieList
