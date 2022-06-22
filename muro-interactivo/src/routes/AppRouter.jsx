import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/Login";

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}