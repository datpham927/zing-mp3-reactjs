import { configureStore } from '@reduxjs/toolkit';
import zingReducer from './features/actionSlice';
export default configureStore({
    reducer: {
        counter: zingReducer,
    },
});
