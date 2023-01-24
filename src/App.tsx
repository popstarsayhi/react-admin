import {Outlet, Link, useRoutes} from "react-router-dom";
import router from "./router"

function App() {

  const outlet =  useRoutes(router)

  return (
    <div className="App">
        {/*<Link to='/home'>Home</Link>*/}
        {/*<Link to='/about'>About</Link>*/}
        {/*<Link to='/user'>User</Link>*/}
        {/*占位符，类似于窗口，用来展示组件的*/}
        {/*<Outlet></Outlet>*/}
        {outlet}
    </div>
  )
}

export default App
