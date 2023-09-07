import React from 'react'
import { CDNURL } from './constants/constant'


const MovieCard = (props) => {
  return (
    <div className='m-1 w-36 '>
          <img className='ease-out hover:scale-110 w-52 h-42' alt="MovieCard" src={CDNURL+props.posterpath}/>
    </div>
  )
}

export default MovieCard
