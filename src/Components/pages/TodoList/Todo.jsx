import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoList } from '../../../store/TodoList/TodoList';
import styled from 'styled-components';

const Todo = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const inputChange = (event) => {
        setValue(event.target.value)
    }
    const addTodo = (event) => {
        event.preventDefault()

        if (value.trim() !== '') {
            let data = {
                value: value,
                id: Math.random(),
                isChecked: false,
                edited: false
            }
            dispatch(TodoList.actions.addTodo(data))
            setValue("")
        }
    }
    return (
        <>
            <StyledTodo>
                <TextTodo>Todo List</TextTodo>
                <TodoElems>
                    <Input value={value} onChange={inputChange} type="text" />
                    <Button value={'id'} onClick={addTodo}>ADD</Button>
                </TodoElems>
            </StyledTodo>
        </>
    );
};

export default Todo;

const StyledTodo = styled.div`
       margin-top: 250px;
    text-align: center;
`
const TextTodo = styled.h1`
 font-size: 30px;
`
const TodoElems = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
   width: 500px;
    font-size: 30px;
    outline: none;
    background: whitesmoke;
    border: 1px solid gray;
`
const Button = styled.button` 
 margin-left: 20px;
    border: none;
    padding: 10px 40px 10px 40px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    background: rgb(29, 174, 29);
    border-radius: 5px;
    &:hover{
     background: rgb(20, 118, 20);
    }
`