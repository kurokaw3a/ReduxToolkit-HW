import { useState } from 'react';
import styled from 'styled-components';


const TodoItems = ({ el, removeTodo, checkTodo, edit }) => {

    const [newVal, setNewVal] = useState(el.value)

    const checTodo = () => {
        checkTodo(el.id)

    }
    const removTodo = () => {
        removeTodo(el.id)
    }

    const editTodo = () => {
        const newData = {
            id: el.id,
            value: newVal
        }
        edit(newData)

    }
    const editedVal = (event) => {
        setNewVal(event.target.value)
    }


    return (
        <>
            <StyledTodoItems>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <CheckImg onClick={checTodo} src={el.isChecked ? "https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" : "https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png"} alt="" />
                    {el.edited ? <ChangeInput value={newVal} defaultValue={el.value} onChange={editedVal} placeholder='type new value' type='text' /> : <Value style={el.isChecked ? { color: "orange" } : { color: "black" }} >{el.value}</Value>}
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                    <IconTodo onClick={editTodo} src={el.edited ? 'https://icons-for-free.com/iconfiles/png/512/save+icon-1320167995084087448.png' : "https://w7.pngwing.com/pngs/1018/119/png-transparent-computer-icons-editing-pencil-miscellaneous-angle-pencil.png"} alt="" />
                    <IconTodo hidden={el.isChecked ? true : false} onClick={removTodo} src={"https://cdn-icons-png.flaticon.com/512/1214/1214428.png"} alt="" />
                </div>

            </StyledTodoItems>

        </>
    );
};

export default TodoItems;

const StyledTodoItems = styled.div`
    background: whitesmoke;
    margin: 20px 500px 0px 500px;
    padding: 0px 20px 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: 0 0 10px gray;

`
const CheckImg = styled.img`
 width: 30px;
    height: 30px;
`
const ChangeInput = styled.input`
     font-size: 20px ;
    margin: 10px 0px 10px 0px;

`
const Value = styled.h1`
margin: 0;
    
`
const IconTodo = styled.img`
    width: 30px;
    height: 30px;
    border: none;
    
`