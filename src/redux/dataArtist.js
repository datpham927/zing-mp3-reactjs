import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataSearch: [],
    dataArtist: [],
    artistSong: [],
    artistMV: [],
    artistSinger: [],
    artistAlbum: [],
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
            if (state.dataArtist.sections?.length > 0) {
                state.dataArtist.sections.forEach((i) => {
                    if (i.title === 'Bài hát nổi bật') {
                        state.artistSong = i;
                    } else if (i.title === 'Single & EP') {
                        state.artistSinger = i;
                    } else if (i.title === 'MV') {
                        state.artistMV = i;
                    } else if (i.title === 'Album') {
                        state.artistAlbum = i;
                    }
                });
            }
        },
    },
});

export const {
    setDataSearch,
    setDataArtist,
    setartistSong,
    setartistSinger,
    setartistMV,
    setartistAlbum,
    setArtist_Modal,
    setModalArtist,
    setDataHome,
} = zingArtist.actions;

export default zingArtist.reducer;
