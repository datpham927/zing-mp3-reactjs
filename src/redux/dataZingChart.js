import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data_zingChart: [],
};

export const zingChart = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataZingChart: (state, action) => {
            state.data_zingChart = action.payload;
        },
    },
});
export const { setDataZingChart } = zingChart.actions;
export default zingChart.reducer;
