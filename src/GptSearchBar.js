import React, { useRef } from 'react'
import openai from './Utils/openai';


const GptSearchBar = () => {
  const searchText = useRef(null);

  function handleClick() {

    main();
  }

  async function main() {
    const query = "Act as a Movie Recommendation System and Suggest some movies for the query " + searchText.current.value+ " only give me names of 5 movie";
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content:query }],
      model: 'gpt-3.5-turbo',
    });

    console.log(completion.choices);
  }


    return (
      <div className='pt-[9%] justify-center flex '>
        <form className=' w-[500px]  grid grid-col-12 bg-black  bg-opacity-20' onSubmit={(e) => e.preventDefault()}>
          <input ref={searchText} type="text" className='p-3 m-2 w-96  col-span-8 rounded-full' placeholder='What would you like to watch?' />
          <button onClick={handleClick} className='py-2 px-4 m-2 col-span-4 bg-red-500 text-white font-bold rounded-full'>Search</button>
        </form>
      
      </div>
    )
}
  
  export default GptSearchBar;
