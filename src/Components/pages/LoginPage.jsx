import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailChange = (event) => {
        setEmail(event.target.value)
    }
    const passwordChange = (event) => {
        setPassword(event.target.value)
    }

    const login = (event) => {
        event.preventDefault()
        if (email.trim() === 'kamaldinov321@gmail.com' && password.trim() === "123456") {
            navigate('TodoList')
        }
    }
    return (
        <Form>
            <LogTxt>Login Page</LogTxt>
            <FormElems>
                <div>
                    <div>
                        <Label >Email</Label>
                    </div>
                    <InputIcon src="https://cdn-icons-png.flaticon.com/512/2549/2549872.png" alt="" />
                    <Input onChange={emailChange} placeholder='enter your email.....' type="email" />
                </div>
                <div>
                    <div>
                        <Label>Password</Label>
                    </div>
                    <InputIcon src="https://icon-library.com/images/free-lock-icon/free-lock-icon-2.jpg" alt="" />
                    <InputShowIcon src='https://pixlok.com/wp-content/uploads/2021/10/Eye-Icon-wsj93.png' alt="" />
                    <Input onChange={passwordChange} maxLength={25} placeholder='enter your password....' type="password" />
                </div>
                <Button onClick={login} >Login</Button>
            </FormElems>
        </Form>
    );
};

export default LoginPage;

const Form = styled.form`
   box-shadow: 0 0 10px gray;
    margin: 120px 500px 0px 500px;
    padding: 20px 0px 150px 0px;
    text-align: center;
    background: whitesmoke;
    font-size: 30px;
    border-radius: 5px;
`
const LogTxt = styled.h1`
    color: rgb(52, 81, 91);
    text-shadow: 0px 0px 8px rgb(156, 179, 186);
`
const FormElems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    text-align: start;
`
const Label = styled.label`
      color: rgb(52, 81, 91);
`
const InputIcon = styled.img`
 position: absolute;
    width: 30px;
    height: 30px;
    margin-top: 10px;
`
const Input = styled.input`
   font-size: 25px;
    width: 450px;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    background: whitesmoke;
    padding-left: 35px;
`
const InputShowIcon = styled.img`
     position: absolute;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 450px;
`
const Button = styled.button`
font-size: 25px;
    padding: 10px 40px 10px 40px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background: rgb(52, 81, 91);
    color: white;
    font-weight: bold;
    &:hover{
     background: rgb(32, 50, 56);
    }
`