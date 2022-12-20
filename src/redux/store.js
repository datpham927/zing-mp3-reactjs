import { configureStore } from '@reduxjs/toolkit';
import zingCounter from './action';
import zingArtist from './dataArtist';
import zingHome from './dataHome';
import zingRadio from './dataRadio';
import zingChart from './dataZingChart';
import dataVideoFollow from './dataVideoFollow';
export default configureStore({
    reducer: {
        counter: zingCounter,
        dataArtist: zingArtist,
        dataHome: zingHome,
        dataZingChart: zingChart,
        dataRadio: zingRadio,
        dataVideo: dataVideoFollow,
    },
});
