import React from 'react'
import ReactDOM from 'react-dom/client'
//1.样式初始化一般放在最前面
import "reset-css"
//2.UI框架的样式
//3.全局样式
import "./assets/styles/global.scss"
//3.特殊组件的样式
import App from './App'
// import Router from './router/index-router-component'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)
