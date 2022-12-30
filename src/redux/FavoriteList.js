import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    songFavorite: JSON.parse(localStorage.getItem('songFavorite')) || [],
    mvFavorite: JSON.parse(localStorage.getItem('mvFavorite')) || [],
    playListFavorite: JSON.parse(localStorage.getItem('playListFavorite')) || [],
};
export const zingFavorite = createSlice({
    name: 'Favorite',
    initialState,
    reducers: {
        setSongFavorite: (state, action) => {
            if (state.songFavorite.length === 0) {
                state.songFavorite.push(action.payload);
            } else {
                const id = state.songFavorite.map((e) => e.encodeId);
                const check = id.includes(action.payload.encodeId);
                if (check) {
                    state.songFavorite = state.songFavorite.filter((e) => e.encodeId !== action.payload.encodeId);
                } else {
                    state.songFavorite.push(action.payload);
                }
            }
            localStorage.setItem('songFavorite', JSON.stringify(state.songFavorite));
        },
        setMvFavorite: (state, action) => {
            if (state.mvFavorite.length === 0) {
                state.mvFavorite.push(action.payload);
            } else {
                const id = state.mvFavorite.map((e) => e.encodeId);
                const check = id.includes(action.payload.encodeId);
                if (check) {
                    state.mvFavorite = state.mvFavorite.filter((e) => e.encodeId !== action.payload.encodeId);
                } else {
                    state.mvFavorite.push(action.payload);
                }
            }
            localStorage.setItem('mvFavorite', JSON.stringify(state.mvFavorite));
        },
        setPlayListFavorite: (state, action) => {
            if (state.playListFavorite.length === 0) {
                state.playListFavorite.push(action.payload);
            } else {
                const id = state.playListFavorite.map((e) => e.encodeId);
                const check = id.includes(action.payload.encodeId);
                if (check) {
                    state.playListFavorite = state.playListFavorite.filter(
                        (e) => e.encodeId !== action.payload.encodeId,
                    );
                } else {
                    state.playListFavorite.push(action.payload);
                }
            }
            localStorage.setItem('playListFavorite', JSON.stringify(state.playListFavorite));
        },
    },
});
export const { setSongFavorite, setMvFavorite, setPlayListFavorite } = zingFavorite.actions;
export default zingFavorite.reducer;
