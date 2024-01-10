import './App.css'
import React from 'react'
import responseMovies from './mocks/with-results.json'
import { Movies } from './components/movies'

function App () {
  const movies = responseMovies.Search

  return (
    <div className='page'>
      <header>
        <h1>Search for a Movie</h1>
        <form className='form'>
          <input placeholder='Batman, Whiplash, Avatar...'></input>
          <button type='submit'>Search</button>
          casc
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
