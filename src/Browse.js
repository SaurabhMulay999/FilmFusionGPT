import React, { useEffect, useState } from 'react'
import Header from './Header'
import { options } from './constants/constant'
import useNowPlay from './hooks/useNowPlay'
import HeadContainer from './HeadContainer'
import BodyContainer from './BodyContainer'
import usePopularMovie  from './hooks/usePopularMovie'
import useTopRatedMovies from './hooks/useTopRatedMovies'
import useUpcomingMovies from './hooks/useUpcomingMovies'

const Browse = () => {
  //calling custom Hook
  useNowPlay();
  usePopularMovie();
  useTopRatedMovies();
  useUpcomingMovies();
     
  return (
    <div>
      <Header />
      <HeadContainer />
      <BodyContainer/>
    </div>
  )
}

export default Browse
