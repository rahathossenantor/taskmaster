import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import usersReducer from "./features/users/usersSlice";
import baseApi from "./features/api/baseApi";

const store = configureStore({
    reducer: {
        tasksSlice: tasksReducer,
        usersSlice: usersReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
});

export default store;
