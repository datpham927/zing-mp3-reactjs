import { configureStore } from '@reduxjs/toolkit';
import zingAction from './action';
import zingArtist from './dataArtist';
import zingHome from './dataHome';
import zingRadio from './dataRadio';
import zingChart from './dataZingChart';
import dataVideoFollow from './dataVideoFollow';
import zingAudio from './dataControl';
import zingPlayMv from './dataMV';
import zingFavorite from './FavoriteList';
export default configureStore({
    reducer: {
        action: zingAction,
        dataArtist: zingArtist,
        dataHome: zingHome,
        dataZingChart: zingChart,
        dataRadio: zingRadio,
        dataVideo: dataVideoFollow,
        dataControl: zingAudio,
        dataMv: zingPlayMv,
        Favorite: zingFavorite,
    },
});
