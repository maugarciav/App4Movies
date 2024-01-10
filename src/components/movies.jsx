import React from 'react'

export const ListOfMovies = ({ movies }) => {
  return (
    <ul>
    {
      movies.map(movie => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={`${movie.Title}, ${movie.Year}`} />
        </li>
      ))
    }
  </ul>
  )
}

export const NoMovieResult = () => {
  return (
    <div>No movies where found</div>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMovieResult/>
  )
}
