import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import TodoItems from "./TodoItems";
import { TodoList } from "../../../store/TodoList/TodoList";

export const Todos = () => {
    const dispatch = useDispatch()
    const { todos } = useSelector((state) => state.TodoList)

    const removeTodo = (id) => {
        dispatch(TodoList.actions.removeTodo(id))
    }
    const checkTodo = (id) => {
        dispatch(TodoList.actions.checkTodo(id))
    }
    const editTodo = (id) => { 
     dispatch(TodoList.actions.editTodo(id))
    }

    return (
        <>
            <Todo />
            {todos.map(el => {
                return <TodoItems edit={editTodo} removeTodo={removeTodo} checkTodo={checkTodo} el={el} />
            })}

        </>
    );
};
