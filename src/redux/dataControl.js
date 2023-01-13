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
    currentVolume: 1,
    booleanControl: false,
    booleanQueueList: false,
    activePlay: false, //nhạc đang pause hay play
    loadMusic: true, //load nhạc
};

export const zingAudio = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setIdAudio: (state, action) => {
            state.idAudio = action.payload;
            state.activePlay = true;
            state.booleanControl = true;
            state.loadMusic = false;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setPlayListAudio: (state, action) => {
            state.playListAudio = action.payload.filter((e) => e.streamingStatus !== 2);
            state.idAudio = state.playListAudio[0];
            localStorage.setItem('audio', JSON.stringify(state));
        },

        setCurrentIndex: (state, action) => {
            state.currentIndex = action.payload;
            state.booleanControl = true;
            state.idAudio = state.playListAudio[state.currentIndex];
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setRepeat: (state, action) => {
            state.repeat = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },

        setPrev: (state, action) => {
            state.prev = action.payload;
            state.activePlay = true;
            if (state.prev) {
                if (state.activePlay) {
                    state.loadMusic = false;
                }
                if (state.shuffle && !state.booleanQueueList) {
                    let shuffle;
                    do {
                        shuffle = Math.floor(Math.random() * state.playListAudio?.length);
                    } while (state.playListAudio[shuffle]?.streamingStatus === 2);
                    state.currentIndex = shuffle;
                    state.idAudio = state.playListAudio[state.currentIndex];
                } else {
                    let index = state.currentIndex;
                    do {
                        index--;
                    } while (state.playListAudio[index]?.streamingStatus === 2);
                    index < 0 ? (state.currentIndex = state.playListAudio?.length - 1) : (state.currentIndex = index);
                    state.idAudio = state.playListAudio[state.currentIndex];
                }
            }
        },
        setNext: (state, action) => {
            state.next = action.payload;
            state.activePlay = true;
            if (state.next) {
                if (state.activePlay) {
                    state.loadMusic = false;
                }
                if (state.shuffle && !state.booleanQueueList) {
                    let index;
                    do {
                        index = Math.floor(Math.random() * state.playListAudio?.length);
                    } while (state.playListAudio[index]?.streamingStatus === 2);
                    state.currentIndex = index;
                    state.idAudio = state.playListAudio[state.currentIndex];
                } else {
                    let index = state.currentIndex;
                    do {
                        index++;
                    } while (state.playListAudio[index]?.streamingStatus === 2);
                    index > state.playListAudio?.length - 1 ? (state.currentIndex = 0) : (state.currentIndex = index);

                    state.idAudio = state.playListAudio[state.currentIndex];
                }
            }
        },
        setShuffle: (state, action) => {
            state.shuffle = action.payload;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setActivePlay: (state, action) => {
            state.activePlay = action.payload;
            if (state.activePlay) {
                state.booleanControl = true;
            }
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
            state.idAudio = [];
            state.booleanControl = false;
            state.booleanQueueList = false;
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setRecentList: (state, action) => {
            if (state.recentList?.length === 0) {
                state.recentList.push(action.payload);
            } else {
                const id = state.recentList.map((e) => e?.encodeId);
                const check = id.includes(action.payload?.encodeId);
                if (!check) {
                    state.recentList.push(action.payload);
                }
            }
            localStorage.setItem('audio', JSON.stringify(state));
        },
        setOpenControl: (state, action) => {
            state.booleanControl = action.payload;
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
    setActivePlay,
} = zingAudio.actions;
export default zingAudio.reducer;
