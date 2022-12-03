import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data_Home: [],
};

export const zingHome = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataHome: (state, action) => {
            state.data_Home = action.payload;
        },
    },
});
export const { setDataHome } = zingHome.actions;
export default zingHome.reducer;
