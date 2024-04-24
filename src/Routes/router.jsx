import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddCoffees from "../Pages/AddCoffees/AddCoffees";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/add_coffees",
                element: <AddCoffees></AddCoffees>
            }
        ]
    }
])

export default router;