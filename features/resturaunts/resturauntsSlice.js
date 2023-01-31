import { createSlice } from "@reduxjs/toolkit";

const resturauntsSlice = createSlice({
    name: "resturaunts",
    initialState: [
        {
            id: 0,
            name: "Taco Test Barn",
            location: "Your computer",
            website: "none",
            url: "none",
        },
    ],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addItem } = resturauntsSlice.actions;

export const resturauntsReducer = resturauntsSlice.reducer;
