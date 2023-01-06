import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataRadio: [],
};

export const zingRadio = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataRadio: (state, action) => {
            state.data_Radio = action.payload;
        },
    },
});
export const { setDataRadio } = zingRadio.actions;
export default zingRadio.reducer;
