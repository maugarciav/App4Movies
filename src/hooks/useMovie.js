import { useRef, useState, useMemo } from 'react'
import { searchMovie } from '../services/movie'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovie] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (previousSearch.current === search) return
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovie({ search })
        setMovie(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  }, [])

  // const getSortedMovies = () => {
  //   console.log('getSortedMovies')
  //   const sortedMovies = sort
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies
  //   return sortedMovies
  // }

  const sortedMovies = useMemo(() => {
    if (movies === undefined || movies === null) return
    console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
