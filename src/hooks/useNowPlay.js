import { useEffect } from "react";
import { addNowPlayMovies } from '../Utils/movieSlice.js';
import { options } from "../constants/constant.jsx";
import { useDispatch } from "react-redux";


const useNowPlay=function() {
    const dispatch = useDispatch();

    const getNowPlayMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayMovies(json.results));
      }

    useEffect(function () {
        getNowPlayMovies();
    }, [])
  
}

export default useNowPlay;