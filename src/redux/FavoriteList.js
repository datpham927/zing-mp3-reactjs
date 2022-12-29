import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    songFavorite: [],
    mvFavorite: [],
};

export const zingFavorite = createSlice({
    name: 'data',
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
        },
    },
});
export const { setSongFavorite, setMvFavorite } = zingFavorite.actions;
export default zingFavorite.reducer;
