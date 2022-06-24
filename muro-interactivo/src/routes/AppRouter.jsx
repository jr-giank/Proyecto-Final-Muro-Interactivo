import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}