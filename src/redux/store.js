import { configureStore } from '@reduxjs/toolkit';
import zingReducer from './actionSlice';
export default configureStore({
    reducer: {
        counter: zingReducer,
    },
});
