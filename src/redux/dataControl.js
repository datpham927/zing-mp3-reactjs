import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('audio')) || {
    idAudio: [],
    playListAudio: [],
    recentList: [],
    currentIndex: -1,
    repeat: false,
    shuffle: false,
    prev: false,
    next: false,
    changerVolume: 100,
    volume: false, //tắt bật
    currentVolume: 100,
    booleanControl: false,
    booleanQueueList: false,
    loadMusic: true, //load nhạc
};

export const zingAudio = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setIdAudio: (state, action) => {
            state.idAudio = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setPlayListAudio: (state, action) => {
            state.playListAudio = action.payload.filter((e) => e.streamingStatus !== 2);
            state.booleanControl = true;
            localStorage.setItem('audio', JSON.stringify(state));
        },

        setCurrentIndex: (state, action) => {
            state.currentIndex = action.payload;
            state.booleanControl = true;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setRepeat: (state, action) => {
            state.repeat = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setNext: (state, action) => {
            state.next = action.payload;
            if (state.next) {
                state.loadMusic = false;
                if (state.shuffle && !state.booleanQueueList) {
                    let shuffle;
                    do {
                        shuffle = Math.floor(Math.random() * state.playListAudio.length - 1);
                    } while (state.playListAudio[shuffle]?.streamingStatus === 2);
                    state.currentIndex = shuffle;
                    state.idAudio = state.playListAudio[state.currentIndex];
                } else {
                    let index = state.currentIndex;
                    do {
                        index++;
                    } while (state.playListAudio[index]?.streamingStatus === 2);
                    index > state.playListAudio.length - 1 ? (state.currentIndex = 0) : (state.currentIndex = index);

                    state.idAudio = state.playListAudio[state.currentIndex];
                }
            }
        },
        setPrev: (state, action) => {
            state.prev = action.payload;
            if (state.prev) {
                state.loadMusic = false;
                if (state.shuffle && !state.booleanQueueList) {
                    let shuffle;
                    do {
                        shuffle = Math.floor(Math.random() * state.playListAudio.length - 1);
                    } while (state.playListAudio[shuffle]?.streamingStatus === 2);
                    state.currentIndex = shuffle;
                    state.idAudio = state.playListAudio[state.currentIndex];
                } else {
                    let index = state.currentIndex;
                    do {
                        index--;
                    } while (state.playListAudio[index]?.streamingStatus === 2);
                    index < 0 ? (state.currentIndex = state.playListAudio.length - 1) : (state.currentIndex = index);
                    state.idAudio = state.playListAudio[state.currentIndex];
                }
            }
        },
        setShuffle: (state, action) => {
            state.shuffle = action.payload;
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
            state.booleanControl = false;
            state.booleanQueueList = false;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setRecentList: (state, action) => {
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
        setOpenControl: (state, action) => {
            state.booleanControl = action.payload;
            if (state.booleanControl) {
                state.activePlay = true;
            }
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setLoadMusic: (state, action) => {
            state.loadMusic = action.payload;
        },
        setOpenQueueList: (state, action) => {
            state.booleanQueueList = action.payload;
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
    setChangerVolume,
    setVolume,
    setCurrentVolume,
    deleteDataPlayList,
    setRecentList,
    setOpenControl,
    setNext,
    setOpenQueueList,
    setLoadMusic,
    setPrev,
} = zingAudio.actions;
export default zingAudio.reducer;
