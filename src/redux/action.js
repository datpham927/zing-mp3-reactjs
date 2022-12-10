import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // đăng nhập
    currentUser: false,
    //mở modal lựa chọn background
    booleanTheme: false,
    // index background
    bgrIndex: 0,
    // xem trước background
    booleanPreviewBgr: false,
    previewBgrIndex: 0,
    // show kết quả ô search
    booleanShowResult: false,
    qualitySong: false,
    booleanOpenInput: false,
    // value search
    value: '',
    booleanVip: false,
};

export const zingCounter = createSlice({
    name: 'zing',
    initialState,
    reducers: {
        // đăng nhập
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        //mở modal lựa chọn background
        modalTheme: (state, action) => {
            state.booleanTheme = action.payload;
        },
        // index background
        backgroundIndex: (state, action) => {
            state.bgrIndex = action.payload;
        },
        // xem trước background
        booleanPreview: (state, action) => {
            state.booleanPreviewBgr = action.payload;
        },
        previewBgrIndex: (state, action) => {
            state.previewBgrIndex = action.payload;
        },
        // show kết quả ô search
        ShowResultSearch: (state, action) => {
            state.booleanShowResult = action.payload;
        },
        // chất lượng nhạc
        BooleanQualitySong: (state, action) => {
            state.qualitySong = action.payload;
        },
        //input
        setOpenInput: (state, action) => {
            state.booleanOpenInput = action.payload;
        },

        // value search
        setValueSearch: (state, action) => {
            state.value = action.payload;
        },
        setModalVip: (state, action) => {
            state.booleanVip = action.payload;
        },
    },
});

export const {
    modalTheme,
    backgroundIndex,
    previewBackground,
    previewBackgroundIndex,
    ShowResultSearch,
    BooleanQualitySong,
    setCurrentUser,
    setOpenInput,
    setValueSearch,
    setModalVip,
} = zingCounter.actions;

export default zingCounter.reducer;
