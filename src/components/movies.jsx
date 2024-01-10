import React from 'react'

export const ListOfMovies = ({ movies }) => {
  return (
    <ul>
    {
      movies.map(movie => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.image} alt={`${movie.title}, ${movie.year}`} />
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
