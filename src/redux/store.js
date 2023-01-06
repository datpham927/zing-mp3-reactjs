import { configureStore } from '@reduxjs/toolkit';
import zingAction from './action';
import zingArtist from './dataArtist';
import zingHome from './dataHome';
import zingRadio from './dataRadio';
import zingChart from './dataZingChart';
import dataFollow from './dataFollow';
import zingAudio from './dataControl';
import zingPlayMv from './dataMV';
import zingFavorite from './FavoriteList';
import currentTime from './currentTimeAudio';
export default configureStore({
    reducer: {
        action: zingAction,
        dataArtist: zingArtist,
        dataHome: zingHome,
        dataZingChart: zingChart,
        dataRadio: zingRadio,
        dataVideo: dataFollow,
        dataControl: zingAudio,
        dataMv: zingPlayMv,
        currentTimeAudio: currentTime,
        Favorite: zingFavorite,
    },
});
