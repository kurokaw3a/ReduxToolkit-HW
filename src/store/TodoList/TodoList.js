import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    todos: []
}

export const TodoList = createSlice({
    name: "TodoList",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)

        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(el => el.id !== action.payload)
        },
        checkTodo(state, action) {
            state.todos = state.todos.map(el => {
                if (el.id !== action.payload) {
                    return el
                }
                return {
                    ...el,
                    isChecked: !el.isChecked
                }


            })
        },
        editTodo(state, action) {
            state.todos = state.todos.map(el => {
                if (el.id !== action.payload.id) {
                    return el
                }
                return {
                    ...el,
                    edited: !el.edited,
                    value: action.payload.value
                }
            })
        }


    },
})