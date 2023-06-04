import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { Todos } from "../pages/TodoList/Todos";

const DefaultRoute = () => {
    return (

        <Routes>
            <Route path="/" element={<LoginPage />} />
                <Route path="/TodoList" element={<Todos />} />
        </Routes>
    );
};

export default DefaultRoute;