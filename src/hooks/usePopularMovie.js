import { useDispatch } from "react-redux";
import { addPopularMovie } from "../Utils/movieSlice";
import { useEffect } from "react";
import { options } from "../constants/constant";


function usePopularMovie() {
    const dispatch = useDispatch();

    const getNowPlayMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const json = await data.json();
        console.log(json);
        dispatch(addPopularMovie(json.results));
      }

    useEffect(function () {
        getNowPlayMovies();
    }, [])
   
}

export default usePopularMovie;