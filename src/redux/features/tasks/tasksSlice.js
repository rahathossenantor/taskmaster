import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            const id = state.tasks.length + 1;
            state.tasks.push({ id, ...payload });
        }
    }
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
