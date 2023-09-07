import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'MovieSlice',
    initialState: {
        movieObj: null,
        popularMovie: null,
        topRated: null,
        upcoming:null,
        trailerVideo: null,
    },

    reducers: {
        addNowPlayMovies: function (state, action) {
            state.movieObj = action.payload;
        },
        addTrailerVideo: function (state, action) {
            state.trailerVideo = action.payload;
        },
        addPopularMovie: function (state, action) {
            state.popularMovie = action.payload;
        },
        addtopRatedMovie: function (state, action) {
            state.topRated = action.payload;
        },
        addUpcomingMovies: function (state, action) {
            state.upcoming = action.payload;
        }


    }
});

export const { addNowPlayMovies,addTrailerVideo,addPopularMovie,addtopRatedMovie,addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;