import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'

const GPTSearch = () => {
  return (
      <div>
           <div className="absolute -z-10">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="netflix" className="w-full h-full" />   

            </div>
          <GptSearchBar />
          <GptMovieSuggestion/>
      
    </div>
  )
}

export default GPTSearch
