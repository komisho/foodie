import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

const resturauntsSlice = createSlice({
    name: "resturaunts",
    initialState: [],
    reducers: {},
});

export const resturauntsReducer = resturauntsSlice.reducer;
