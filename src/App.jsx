import './App.css'
import React from 'react'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovie'

function App () {
  const { movies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Search for a Movie</h1>
        <form className='form'>
          <input placeholder='Batman, Whiplash, Avatar...'></input>
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
