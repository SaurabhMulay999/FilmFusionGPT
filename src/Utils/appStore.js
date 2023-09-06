import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import movieSlice from './movieSlice';

const appStore = configureStore({
    reducer: {
        userSlice,
        movieSlice
    }
}
);

export default appStore;