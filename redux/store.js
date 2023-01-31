import { resturauntsReducer } from "../features/resturaunts/resturauntsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        resturaunts: resturauntsReducer,
    },
});
