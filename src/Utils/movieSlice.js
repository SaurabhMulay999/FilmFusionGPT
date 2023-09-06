import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'MovieSlice',
    initialState: {
        movieObj: null
    },

    reducers: {
        addNowPlayMovies: function (state, action) {
            state.movieObj = action.payload;
        },

    }
});

export const { addNowPlayMovies } = movieSlice.actions;
export default movieSlice.reducer;