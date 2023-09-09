import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import movieSlice from './movieSlice';
import GptSlice from './GptSlice';

const appStore = configureStore({
    reducer: {
        GptSlice,
        userSlice,
        movieSlice
    }
}
);

export default appStore;