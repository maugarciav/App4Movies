import { useState } from 'react'
import { searchMovie } from '../services/movie'

export const useMovies = ({ search }) => {
  const [movies, setMovie] = useState([])

  const getMovies = async () => {
    const newMovies = await searchMovie({ search })
    setMovie(newMovies)
  }

  return { movies, getMovies }
}
