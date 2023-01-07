import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataZingChart: [],
};

export const zingChart = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataZingChart: (state, action) => {
            state.dataZingChart = action.payload;
        },
    },
});
export const { setDataZingChart } = zingChart.actions;
export default zingChart.reducer;
