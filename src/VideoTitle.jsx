import React from 'react'

const VideoTitle = (props) => {
  return (
    <div className='pt-[20%] absolute text-white px-12 bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-4xl font-bold'>{props.title}</h1>
      <p className='text-lg w-[600px] py-4'>{props.overview}</p>
       
      <div className='flex'>
        <button className='bg-gray-200 px-12 text-black p-3 flex m-1 rounded-lg'><img src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/play-icon.png" className='w-4 m-1 h-4'/>Play</button>
        

        <button className='bg-gray-600 px-12 text-white p-3 flex m-1 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
