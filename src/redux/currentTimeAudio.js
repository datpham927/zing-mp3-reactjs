const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    currentTimeAudio: JSON.parse(localStorage.getItem('ChangerTime')) || 0, //thời gian hiện tại của bài nhạc
    // thay đổi liên tục nên phải viết riêng
};

const currentTime = createSlice({
    name: 'time',
    initialState,
    reducers: {
        setCurrentTimeAudio: (state, action) => {
            state.currentTimeAudio = action.payload;
            localStorage.setItem('ChangerTimse', JSON.stringify(state.currentTimeAudio));
        },
    },
});
export const { setCurrentTimeAudio } = currentTime.actions;

export default currentTime.reducer;
