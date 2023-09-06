import React from 'react'
import { useSelector } from 'react-redux'

const BodyContainer = () => {
    const movie = useSelector(function (store) {
        return store.MovieSlice.movieObj;
    })
  return (
    <div>
      
    </div>
  )
}

export default BodyContainer
