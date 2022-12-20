const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    dataVideoFl: [],
};

export const dataVideoFollow = createSlice({
    name: 'dataVideo',
    initialState,
    reducers: {
        setDataFollow: (state, action) => {
            state.dataVideoFl = action.payload;
        },
    },
});

export const { setDataFollow } = dataVideoFollow.actions;
export default dataVideoFollow.reducer;
