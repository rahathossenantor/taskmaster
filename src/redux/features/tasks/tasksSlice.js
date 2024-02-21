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
        updateStatus: (state, { payload }) => {
            const targetedTask = state.tasks.find(task => task.id === payload.id);
            targetedTask.status = payload.status;
        },
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter(task => task.id !== payload);
        }
    }
});

export const { addTask, updateStatus, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
