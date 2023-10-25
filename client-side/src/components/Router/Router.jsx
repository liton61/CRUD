import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Add from "../Add/Add";
import Edit from "../Edit/Edit";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/users`)
            },
            {
                path: "/add",
                element: <Add></Add>
            },
            {
                path: "/edit",
                element: <Edit></Edit>
            },
        ]
    },
])

export default router;