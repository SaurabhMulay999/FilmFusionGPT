import React, { useEffect, useState } from 'react'
import Header from './Header'
import { options } from './constants/constant'
import useNowPlay from './hooks/useNowPlay'

const Browse = () => {
  //calling custom Hook
  useNowPlay();
     
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
