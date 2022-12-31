import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idMv: 0,
    playMv: false, //mv pause or play
    changerDataMv: false,
    indexOpenMv: 0,
    kindTitle: 'Tất Cả', //kind music mv
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
        },
        setKindTitle: (state, action) => {
            state.kindTitle = action.payload;
        },
    },
});
export const { setIdMv, setPlayMv, setChangerDataMv, setIndexOpenMv, setKindTitle } = zingPlayMv.actions;
export default zingPlayMv.reducer;
