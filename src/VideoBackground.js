import React, { useEffect } from 'react'
import { options } from './constants/constant'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from './Utils/movieSlice'
import useTrailer from './hooks/useTrailer'


const VideoBackground = ({ MovieId }) => {
  const trailer = useTrailer(MovieId);
 
 
  return (
    <div>
      <iframe src={"https://www.youtube.com/embed/"+trailer?.key} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground;
