import './App.css'
import React, { useEffect, useState, useRef } from 'react'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovie'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Can\'t look for an empty movie')
      return
    }

    if (search.length < 3) {
      setError('Search must have 3 or more charcaters')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('Can\'t search for a movie that contains numbers')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Search for a Movie</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Batman, Whiplash, Avatar...'/>
          <button type='submit'>Search</button>
          <input type='checkbox' onChange={handleSort} checked={sort}/>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Loading...</p> : <Movies movies={movies}/>}
      </main>
    </div>
  )
}

export default App
