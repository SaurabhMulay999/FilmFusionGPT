import React from 'react'

const GptSearchBar = () => {
  return (
      <div className='pt-[9%] justify-center flex '>
          <form className=' w-[500px]  grid grid-col-12 bg-black  bg-opacity-20'>
              <input type="text" className='p-3 m-2 w-96  col-span-8 rounded-full' placeholder='What would you like to watch?' />
              <button className='py-2 px-4 m-2 col-span-4 bg-red-500 text-white font-bold rounded-full'>Search</button>
          </form>
      
    </div>
  )
}

export default GptSearchBar
