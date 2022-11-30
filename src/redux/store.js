import { configureStore } from '@reduxjs/toolkit';
import zingCounter from './action';
import zingArtist from './data';
export default configureStore({
    reducer: {
        counter: zingCounter,
        data: zingArtist,
    },
});
