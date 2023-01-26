import Home from "../views/Home";
import React, {lazy} from "react";
import {Navigate, Route} from "react-router-dom";
import Login from "../views/login";


const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const Page301 = lazy(() => import("../views/Page301"))

//懒加载需要给他添加一个loading组件
const withLoadingComponent = (comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
    )
}


const routes = [
    {
        path: "/",
        element: <Navigate to="/page1"/>
    },
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: '/page1',
                element: withLoadingComponent(<Page1/>)
            },
            {
                path: '/page2',
                element: withLoadingComponent(<Page2/>)
            },
            {
                path: '/page3/page301',
                element: withLoadingComponent(<Page301/>)
            },
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    // 其他路径就直接跳转到主页
    {
        path:'*',
        element: <Navigate to="/page1"/>
    }
]

export default routes