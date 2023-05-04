import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
        
    path: "/",
    element: <Main></Main>,
    children:[
        {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('https://b7a10-chef-recipe-hunter-server-side-tiyasa-tagor-tiyasa-tagore.vercel.app/all')
        }

    ]

    }
])
export default router;