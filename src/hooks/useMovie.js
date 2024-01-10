import responseMovies from '../mocks/with-results.json'
// import withOutResults from '../mocks/no-result.json'

export const useMovies = () => {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster
  }))

  return { movies: mappedMovies }
}
