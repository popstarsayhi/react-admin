import Home from "../views/Home";
import React, {lazy} from "react";
import {Navigate, Route} from "react-router-dom";

// import About from "../views/About";
// import User from "../views/User";

const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))

//懒加载需要给他添加一个loading组件

const withLoadingComponent = (comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
    )
}


const routes = [
    //嵌套路由开始----------------------
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
        ]
    }
    //嵌套路由结束--------------------------

    // {
    //     path: "/home",
    //     element: <Home/>
    // },
    // {
    //     path: "/about",
    //     element: withLoadingComponent(<About/>)
    // },
    // {
    //     path: "/user",
    //     element: withLoadingComponent(<User/>)
    // },
]

export default routes