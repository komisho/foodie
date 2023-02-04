import { createSlice } from "@reduxjs/toolkit";

const resturauntsSlice = createSlice({
    name: "resturaunts",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            console.log(
                state.findIndex((item) => item.name === action.payload)
            );
            state.splice(
                state.findIndex((item) => item.name === action.payload),
                1
            );
        },
    },
});

export const { addItem, removeItem } = resturauntsSlice.actions;

export const resturauntsReducer = resturauntsSlice.reducer;
