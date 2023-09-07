import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import useRandom from './hooks/useRandom';


const HeadContainer = () => {
  const movie = useSelector(function (store) {
    return store.movieSlice.movieObj;
  })

  if (movie == null) return;
  const mainMovie = movie[1];
  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground MovieId={mainMovie.id}/>
    </div>
  )
}

export default HeadContainer
