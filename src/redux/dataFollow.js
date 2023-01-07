const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    dataVideoFl: [],
};

export const dataFollow = createSlice({
    name: 'dataVideo',
    initialState,
    reducers: {
        setDataFollow: (state, action) => {
            state.dataVideoFl = action.payload;
        },
    },
});

export const { setDataFollow } = dataFollow.actions;
export default dataFollow.reducer;
