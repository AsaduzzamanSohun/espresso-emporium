import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddCoffees from "../Pages/AddCoffees/AddCoffees";
import EditCoffees from "../Pages/EditCoffees/EditCoffees";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffees')
            },
            {
                path: "/add_coffees",
                element: <AddCoffees></AddCoffees>
                
            },
            {
                path: "/edit-coffee/:id",
                element: <EditCoffees></EditCoffees>,
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            }
        ]
    }
])

export default router;