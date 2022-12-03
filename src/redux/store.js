import { configureStore } from '@reduxjs/toolkit';
import zingCounter from './action';
import zingArtist from './dataArtist';
import zingHome from './dataHome';
export default configureStore({
    reducer: {
        counter: zingCounter,
        dataArtist: zingArtist,
        dataHome: zingHome,
    },
});
