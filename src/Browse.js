import React, { useEffect, useState } from 'react'
import Header from './Header'
import { options } from './constants/constant'
import useNowPlay from './hooks/useNowPlay'
import HeadContainer from './HeadContainer'
import BodyContainer from './BodyContainer'


const Browse = () => {
  //calling custom Hook
  useNowPlay();
     
  return (
    <div>
      <Header />
      <HeadContainer />
      <BodyContainer/>
   
    </div>
  )
}

export default Browse
