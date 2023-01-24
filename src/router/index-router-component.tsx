import React from 'react';
//history模式是BrowserRoute，hash模式是HashRouter
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import App from '../App'
import Home from "../views/Home";
import About from "../views/About";


const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                {/*如果输入/就直接跳到home page*/}
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter;
