import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('private')) || {
    playListTitle: [],
    songFavorite: [],
    mvFavorite: [],
    playListFavorite: [],
    addPlayList: [],
    selectionAll: false,
    privatePlayLists: [],
    idDeletePlayList: 0,
};
export const zingFavorite = createSlice({
    name: 'private',
    initialState,
    reducers: {
        setSongFavorite: (state, action) => {
            if (state.songFavorite?.length === 0) {
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
            localStorage.setItem('private', JSON.stringify(state));
        },

        setMvFavorite: (state, action) => {
            if (state.mvFavorite?.length === 0) {
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
            localStorage.setItem('private', JSON.stringify(state));
        },

        setPlayListFavorite: (state, action) => {
            if (state.playListFavorite?.length === 0) {
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
            localStorage.setItem('private', JSON.stringify(state));
        },

        setPlayListTitle: (state, action) => {
            state.playListTitle = action.payload;
            localStorage.setItem('private', JSON.stringify(state));
        },

        setAddPlayList: (state, action) => {
            if (action.payload === {}) {
                state.addPlayList = [];
            } else {
                if (state.addPlayList?.length === 0) {
                    state.addPlayList.push(action.payload);
                } else {
                    const id = state.addPlayList.map((e) => e.encodeId);
                    const check = id.includes(action.payload.encodeId);
                    if (check) {
                        state.addPlayList = state.addPlayList.filter((e) => e.encodeId !== action.payload.encodeId);
                    } else {
                        state.addPlayList.push(action.payload);
                    }
                }
            }
        },

        setSelectionAll: (state, action) => {
            state.selectionAll = action.payload;
            if (state.selectionAll) {
                state.addPlayList = [];
            }
        },

        setCreatePlayList: (state, action) => {
            state.privatePlayLists.push(action.payload);
            localStorage.setItem('private', JSON.stringify(state));
        },

        setIdPlayList: (state, action) => {
            state.idDeletePlayList = action.payload;
        },

        setDeletePlayList: (state) => {
            if (state.privatePlayLists?.length === 1) {
                state.privatePlayLists = [];
            } else {
                state.privatePlayLists = state.privatePlayLists.filter((e) => e.encodeId !== state.idDeletePlayList);
            }
            localStorage.setItem('private', JSON.stringify(state));
        },
        setEditPlayList: (state, action) => {
            const id = state.privatePlayLists.map((e) => e.encodeId);
            const index = id.indexOf(state.idDeletePlayList);
            state.privatePlayLists[index].title = action.payload;
            localStorage.setItem('private', JSON.stringify(state));
        },
    },
});
export const {
    setSongFavorite,
    setMvFavorite,
    setPlayListFavorite,
    setPlayListTitle,
    setAddPlayList,
    setSelectionAll,
    setCreatePlayList,
    setIdPlayList,
    setDeletePlayList,
    setEditPlayList,
} = zingFavorite.actions;
export default zingFavorite.reducer;
