import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataSearch: [],
    dataArtist: [],
    artist_Song: [],
    artist_MV: [],
    artist_Singer: [],
    artist_Album: [],
    modalArtist: false,
};

export const zingArtist = createSlice({
    name: 'data',
    initialState,
    reducers: {
        //data search
        setDataSearch: (state, action) => {
            state.dataSearch = action.payload;
        },
        //data Artist
        setDataArtist: (state, action) => {
            state.dataArtist = action.payload;
        },
        setArtist_Song: (state, action) => {
            state.artist_Song = action.payload;
        },
        setArtist_Singer: (state, action) => {
            state.artist_Singer = action.payload;
        },
        setArtist_MV: (state, action) => {
            state.artist_MV = action.payload;
        },
        setArtist_Album: (state, action) => {
            state.artist_Album = action.payload;
        },
        setModalArtist: (state, action) => {
            state.modalArtist = action.payload;
        },
        setDataHome: (state, action) => {
            state.data_Home = action.payload;
        },
    },
});

export const {
    setDataSearch,
    setDataArtist,
    setArtist_Song,
    setArtist_Singer,
    setArtist_MV,
    setArtist_Album,
    setArtist_Modal,
    setModalArtist,
    setDataHome,
} = zingArtist.actions;

export default zingArtist.reducer;
