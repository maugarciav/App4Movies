import './App.css'
import React from 'react'

function App () {
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
        Results must be here
      </main>
    </div>
  )
}

export default App
