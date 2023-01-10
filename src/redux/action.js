import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // đăng nhập
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || {
        displayName: '',
        email: '',
        photoURL: '',
    },
    user: JSON.parse(localStorage.getItem('user')) || false,
    openModalLogin: false,
    //mở modal lựa chọn background
    booleanTheme: false,
    // index background
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
    booleanTimer: false, //ẩn hiện modal hẹn giờ
    booleanModalPortal: false,
    booleanModalPortalDelete: false,
    booleanEdit: false,
    booleanModalAddPlayList: false,
    booleanKindPlaylist: JSON.parse(localStorage.getItem('booleanKindPlaylist')) || false, //true playlist cá nhân
    openLyric: false,
    bgrIndex: JSON.parse(localStorage.getItem('bgrIndex')) || 2,
    timer: JSON.parse(localStorage.getItem('timer')) || 0, //thời gian hẹn giờ (second)
    dateTime: JSON.parse(localStorage.getItem('dateTime')) || 0, //thời gian dự kiến dừng nhạc (hour,day)
};

export const zingAction = createSlice({
    name: 'zing',
    initialState,
    reducers: {
        // đăng nhập
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            if (state.currentUser) {
                state.user = true;
            } else {
                state.user = false;
            }
            localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
            localStorage.setItem('user', JSON.stringify(state.user));
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

        setModalTimer: (state, action) => {
            state.booleanTimer = action.payload;
        },
        setTimer: (state, action) => {
            state.timer = action.payload;
            localStorage.setItem('timer', JSON.stringify(state.timer));
        },
        setDateTime: (state, action) => {
            state.dateTime = action.payload;
            localStorage.setItem('dateTime', JSON.stringify(state.dateTime));
        },
        setModalPortal: (state, action) => {
            state.booleanModalPortal = action.payload;
            localStorage.setItem('modalPortal', JSON.stringify(state.booleanModalPortal));
        },
        setModalAddPlayList: (state, action) => {
            state.booleanModalAddPlayList = action.payload;
        },
        setModalPortalDelete: (state, action) => {
            state.booleanModalPortalDelete = action.payload;
        },
        setBooleanEdit: (state, action) => {
            state.booleanEdit = action.payload;
        },
        setKindPlaylist: (state, action) => {
            state.booleanKindPlaylist = action.payload;
            localStorage.setItem('booleanKindPlaylist', JSON.stringify(state.booleanKindPlaylist));
        },
        setOpenLyric: (state, action) => {
            state.openLyric = action.payload;
        },
        setOpenModalLogin: (state, action) => {
            state.openModalLogin = action.payload;
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
    setModalTimer,
    setTimer,
    setDateTime,
    setModalPortal,
    setModalAddPlayList,
    setModalPortalDelete,
    setBooleanEdit,
    setKindPlaylist,
    setOpenLyric,
    setOpenModalLogin,
} = zingAction.actions;

export default zingAction.reducer;
