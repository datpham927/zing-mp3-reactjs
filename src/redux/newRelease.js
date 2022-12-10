const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    dataNewRelease: [],
};

const NewRelease = createSlice({
    name: 'release',
    initialState,
    reducers: {
        setDataNewRelease: (state, action) => {
            state.dataNewRelease = action.payload;
        },
    },
});
export const { setDataNewRelease } = NewRelease.actions;
export default NewRelease.reducer;
