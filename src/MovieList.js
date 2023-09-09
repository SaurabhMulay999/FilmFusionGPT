import React from 'react'
import MovieCard from './MovieCard'

//image url https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

const MovieList = (prop) => {
  return (
      <div className='bg-black p-6 w-screen'>
         <h1 className='text-white text-xl font-bold font-sans p-2'>{prop.title}</h1>
          <div className="flex overflow-x-scroll overflow-y-hidden no-scrollbar">
              <div className="flex">
                  {
                      prop.movies.map((movie)=> {
                          return <MovieCard key={movie.id} title={movie.title} posterpath={movie.poster_path}/>
                      })
                  }
            </div>
        </div>
     </div>
  )
}

export default MovieList
