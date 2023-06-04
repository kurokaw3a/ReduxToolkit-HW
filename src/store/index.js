import { configureStore } from "@reduxjs/toolkit";
import { TodoList } from "./TodoList/TodoList";

export const store = configureStore({
    reducer: {
        TodoList: TodoList.reducer,
    },
})