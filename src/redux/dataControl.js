import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('audio')) || {
    idAudio: [],
    playListAudio: [],
    recentList: [],
    currentIndex: -1,
    repeat: false,
    shuffle: false,
    changerTime: 0,
    changerVolume: 100,
    volume: false,
    currentVolume: 100,
};

export const zingAudio = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setIdAudio: (state, action) => {
            state.idAudio = action.payload;
            if (state.recentList.length === 0) {
                state.recentList.push(action.payload);
            } else {
                const id = state.recentList.map((e) => e.encodeId);
                const check = id.includes(action.payload.encodeId);
                if (!check) {
                    state.recentList.push(action.payload);
                }
            }
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setPlayListAudio: (state, action) => {
            state.playListAudio = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },

        setCurrentIndex: (state, action) => {
            state.currentIndex = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setRepeat: (state, action) => {
            state.repeat = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setShuffle: (state, action) => {
            state.shuffle = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setChangerTime: (state, action) => {
            state.changerTime = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },

        setChangerVolume: (state, action) => {
            state.changerVolume = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setCurrentVolume: (state, action) => {
            state.currentVolume = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        deleteDataPlayList: (state) => {
            state.playListAudio = [];
            state.recentList = [];
            localStorage.setItem('audio', JSON.stringify(state));
        },
    },
});
export const {
    setIdAudio,
    setPlayListAudio,
    setCurrentIndex,
    setRepeat,
    setShuffle,
    setChangerTime,
    setChangerVolume,
    setVolume,
    setCurrentVolume,
    deleteDataPlayList,
} = zingAudio.actions;
export default zingAudio.reducer;
