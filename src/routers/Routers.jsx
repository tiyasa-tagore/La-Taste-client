import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
    {
        
    path: "/",
    element: <Main></Main>,
    children:[
        {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('https://b7a10-chef-recipe-hunter-server-side-tiyasa-tagor-tiyasa-tagore.vercel.app/all')
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }

    ]

    }
])
export default router;