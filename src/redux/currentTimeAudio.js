const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    currentTimeAudio: JSON.parse(localStorage.getItem('ChangerTimer')) || 0,
};

const currentTime = createSlice({
    name: 'time',
    initialState,
    reducers: {
        setCurrentTimeAudio: (state, action) => {
            state.currentTimeAudio = action.payload;
            localStorage.setItem('ChangerTimer', JSON.stringify(state.currentTimeAudio));
        },
    },
});
export const { setCurrentTimeAudio } = currentTime.actions;

export default currentTime.reducer;
