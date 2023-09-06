import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../constants/constant";
import { addTrailerVideo } from "../Utils/movieSlice";


function useTrailer(MovieId) {
     
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+MovieId+'/videos?language=en-US', options);
    const json = await data.json();
    const filterData = json.results.filter(video => video.type == 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));

  }
  
  useEffect(function cb() {
    getMovieVideo();
  }, [])
  
const trailer = useSelector(function (store) {
    return store.movieSlice.trailerVideo;
  })
    
    return trailer;
}

export default useTrailer;