import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // đăng nhập
    currentUser: false,
    //mở modal lựa chọn background
    booleanTheme: false,
    // index background
    bgrIndex: JSON.parse(localStorage.getItem('bgrIndex')) || 0,
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
    booleanModalFollow: false,
    booleanTimer: false,
    booleanControl: JSON.parse(localStorage.getItem('control')) || false,
    booleanQueueList: false,
    booleanModalPortal: false,
    activePlay: false,
    timer: JSON.parse(localStorage.getItem('timer')) || 0,
    dateTime: JSON.parse(localStorage.getItem('dateTime')) || 0,
};

export const zingAction = createSlice({
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
            localStorage.setItem('bgrIndex', JSON.stringify(state.bgrIndex));
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
        setModalFollow: (state, action) => {
            state.booleanModalFollow = action.payload;
        },
        setOpenControl: (state, action) => {
            state.booleanControl = action.payload;
            localStorage.setItem('control', JSON.stringify(state.booleanControl));
        },
        setOpenQueueList: (state, action) => {
            state.booleanQueueList = action.payload;
        },
        setActivePlay: (state, action) => {
            state.activePlay = action.payload;
        },
        setModalTimer: (state, action) => {
            state.booleanTimer = action.payload;
        },
        setTimer: (state, action) => {
            state.timer = action.payload;
            localStorage.setItem('timer', JSON.stringify(state.timer));
        },
        setDateTime: (state, action) => {
            state.dateTime = action.payload;
            localStorage.setItem('time', JSON.stringify(state.dateTime));
        },
        setModalPortal: (state, action) => {
            state.booleanModalPortal = action.payload;
            localStorage.setItem('modalPortal', JSON.stringify(state.booleanModalPortal));
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
    setModalFollow,
    setOpenControl,
    setOpenQueueList,
    setActivePlay,
    setModalTimer,
    setTimer,
    setDateTime,
    setModalPortal,
} = zingAction.actions;

export default zingAction.reducer;
