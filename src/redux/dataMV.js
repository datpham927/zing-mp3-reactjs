import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idMv: 0,
    playMv: false, //mv pause or play
    changerDataMv: false,
    kindTitle: 'Tất Cả', //option kind music mv
    indexOpenMv: JSON.parse(localStorage.getItem('indexOpenMv')),
};

export const zingPlayMv = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setIdMv: (state, action) => {
            state.idMv = action.payload;
        },
        setPlayMv: (state, action) => {
            state.playMv = action.payload;
        },
        setChangerDataMv: (state, action) => {
            state.changerDataMv = action.payload;
        },
        setIndexOpenMv: (state, action) => {
            state.indexOpenMv = action.payload;
            localStorage.setItem('indexOpenMv', JSON.stringify(state.indexOpenMv));
        },
        setKindTitle: (state, action) => {
            state.kindTitle = action.payload;
        },
    },
});
export const { setIdMv, setPlayMv, setChangerDataMv, setIndexOpenMv, setKindTitle } = zingPlayMv.actions;
export default zingPlayMv.reducer;
