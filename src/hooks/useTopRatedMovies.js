import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../constants/constant";
import { addtopRatedMovie } from "../Utils/movieSlice";


function useTopRatedMovies() {
    const dispatch = useDispatch();

    const getNowPlayMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const json = await data.json();
        console.log(json);
        dispatch(addtopRatedMovie(json.results));
      }

    useEffect(function () {
        getNowPlayMovies();
    }, [])
   
}

export default useTopRatedMovies;