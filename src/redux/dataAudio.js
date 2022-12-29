import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idAudio: [],
    playListAudio: [],
    recentList: [],
    activePlay: false,
    currentIndex: -1,
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
        },
        setPlayListAudio: (state, action) => {
            state.playListAudio = action.payload;
        },
        setActivePlay: (state, action) => {
            state.activePlay = action.payload;
        },
        setCurrentIndex: (state, action) => {
            state.currentIndex = action.payload;
        },
    },
});
export const { setIdAudio, setPlayListAudio, setActivePlay, setCurrentIndex } = zingAudio.actions;
export default zingAudio.reducer;
