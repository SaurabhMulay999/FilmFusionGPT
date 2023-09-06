import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';


const HeadContainer = () => {
  const movie = useSelector(function (store) {
    return store.movieSlice.movieObj;
  })
  if (movie == null) return;
  
  const mainMovie = movie[0];
  return (
    <div>
      <h1>{mainMovie?.title}</h1>
    </div>
  )
}

export default HeadContainer
