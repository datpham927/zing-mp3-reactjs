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
        // eslint-disable-next-line no-dupe-keys
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
        setModalArtist: (state, action) => {
            state.modalArtist = action.payload;
        },
    },
});

export const { setDataSearch, setDataArtist, setModalArtist } = zingArtist.actions;

export default zingArtist.reducer;
