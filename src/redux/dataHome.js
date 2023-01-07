import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataHome: [],
    dataNewSongs: [],
};

export const zingHome = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataHome: (state, action) => {
            state.dataHome = action.payload;
            state.dataNewSongs = action.payload.find((e) => e.sectionType === 'new-release').items;
        },
    },
});
export const { setDataHome } = zingHome.actions;
export default zingHome.reducer;
