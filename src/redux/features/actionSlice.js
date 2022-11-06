import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    //mở modal lựa chọn background
    booleanTheme: false,
    // index background
    bgrIndex: 0,
    // xem trước background
    booleanPreviewBgr: false,
    previewBgrIndex: 0,
};

export const zingCounter = createSlice({
    name: 'zing',
    initialState,
    reducers: {
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
    },
});

export const { modalTheme, backgroundIndex, previewBackground, previewBackgroundIndex } = zingCounter.actions;

export default zingCounter.reducer;
