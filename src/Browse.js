import React, { useEffect, useState } from 'react'
import Header from './Header'
import { options } from './constants/constant'
import useNowPlay from './hooks/useNowPlay'
import HeadContainer from './HeadContainer'
import BodyContainer from './BodyContainer'
import usePopularMovie  from './hooks/usePopularMovie'
import useTopRatedMovies from './hooks/useTopRatedMovies'
import useUpcomingMovies from './hooks/useUpcomingMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  //calling custom Hook
  useNowPlay();
  usePopularMovie();
  useTopRatedMovies();
  useUpcomingMovies();

  const searchtoggle = useSelector(function (store) {
    return store.GptSlice.toggleSearch;
  })
     
  return (
    <div>
      <Header />
      {searchtoggle && <GPTSearch />}
      <HeadContainer />
      <BodyContainer/>
    </div>
  )
}

export default Browse
