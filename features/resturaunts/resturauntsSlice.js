import { createSlice } from "@reduxjs/toolkit";

const resturauntsSlice = createSlice({
    name: "resturaunts",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addItem } = resturauntsSlice.actions;

export const resturauntsReducer = resturauntsSlice.reducer;
