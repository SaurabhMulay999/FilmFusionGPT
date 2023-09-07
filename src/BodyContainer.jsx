import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const BodyContainer = () => {

  const movies = useSelector(function(store) {
    return store.movieSlice.movieObj;
  })


  if (movies == null) return;
  return (
    <div className='-mt-28 relative z-20'>
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Popular"} movies={movies} />
      <MovieList title={"Horror"} movies={movies} />
      <MovieList title={"Action"} movies={movies} />
    </div>
  )
}

export default BodyContainer
