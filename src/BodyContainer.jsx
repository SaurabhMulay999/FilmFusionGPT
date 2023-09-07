import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const BodyContainer = () => {

  const movies = useSelector(function(store) {
    return store.movieSlice.movieObj;
  })

  const popular = useSelector(function (store) {
    return store.movieSlice.popularMovie;
  })
  
  const topRated = useSelector(function (store) {
    return store.movieSlice.topRated;
  })
  
  const upcoming = useSelector(function (store) {
    return store.movieSlice.upcoming;
  })


  if (movies == null || popular==null || topRated==null || upcoming==null) return;
  return (
    <div className='-mt-28 relative z-20'>
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Top Rated"} movies={topRated} />
      <MovieList title={"Popular"} movies={popular} />
      <MovieList title={"Horror"} movies={movies} />
      <MovieList title={"Upcoming"} movies={upcoming} />
    </div>
  )
}

export default BodyContainer
