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
                loader: () => fetch('https://espresso-emporium-server-phi.vercel.app/coffees')
            },
            {
                path: "/add_coffees",
                element: <AddCoffees></AddCoffees>
                
            },
            {
                path: "/edit-coffee/:id",
                element: <EditCoffees></EditCoffees>,
                loader: ({params}) => fetch(`https://espresso-emporium-server-phi.vercel.app/coffees/${params.id}`)
            }
        ]
    }
])

export default router;