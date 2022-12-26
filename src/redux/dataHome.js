import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data_Home: [],
    data_newSongs: [],
    data_RTChart: [],
};

export const zingHome = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataHome: (state, action) => {
            state.data_Home = action.payload;
            state.data_newSongs = action.payload.find((e) => e.sectionType === 'new-release').items;
        },
    },
});
export const { setDataHome } = zingHome.actions;
export default zingHome.reducer;
