import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../constants/constant";
import { addUpcomingMovies } from "../Utils/movieSlice";


function useUpcomingMovies() {
    const dispatch = useDispatch();

    const getNowPlayMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const json = await data.json();
        console.log(json);
        dispatch(addUpcomingMovies(json.results));
      }

    useEffect(function () {
        getNowPlayMovies();
    }, [])
   
}

export default useUpcomingMovies;