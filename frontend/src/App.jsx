import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
function App() {

  const movieNumber = 2;
  return (

   <>
    {movieNumber === 1 ? (
      <MovieCard movie = {{title: "Juan's Movie", release_date: "2024", }} />
    ) : (
      <MovieCard movie = {{title: "pleb's Movie", release_date: "2025", }} />
    )}
   </>
  )
}

export default App
