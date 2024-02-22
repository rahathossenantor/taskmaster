import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Rahat Hossen",
    email: "rahathossen@gmail.com"
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
});

export default usersSlice.reducer;
