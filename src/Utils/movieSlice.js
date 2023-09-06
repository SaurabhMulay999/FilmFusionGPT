import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'MovieSlice',
    initialState: {
        movieObj: null,
        trailerVideo: null,
    },

    reducers: {
        addNowPlayMovies: function (state, action) {
            state.movieObj = action.payload;
        },
        addTrailerVideo: function (state, action) {
            state.trailerVideo = action.payload;
        }

    }
});

export const { addNowPlayMovies,addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;