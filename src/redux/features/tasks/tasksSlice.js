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
            state.tasks.push({ id, status: "pending", ...payload });
        },
        removeTask: (state, { payload }) => {
            state.tasks.filter(task => task.id !== payload);
        }
    }
});

export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
