const API_KEY = '37043f33'

export const searchMovie = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apiKey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movie')
  }
}
