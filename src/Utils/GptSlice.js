import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        toggleSearch: false,
    },
    reducers: {
        toggleGptSearchView: function (state, action) {
            state.toggleSearch = !state.toggleSearch;

        }
    }
})

export default gptSlice.reducer;
export const {toggleGptSearchView } = gptSlice.actions;
