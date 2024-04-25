
import { SlCup } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";

import CoffeeCard from "../AddCoffees/CoffeeCard";
import { useState } from "react";




const Products = () => {

    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)

    return (
        <div className="font-raleway bg-[url('https://i.imgur.com/8p9bufu.png')] h-[1189px] my-28 bg-cover bg-center min-w-screen">

            <div className="text-center mb-12">
                <h4>--- Sip & Savor ---</h4>
                <h2 className="font-rancho text-4xl dark my-4">
                    Our Popular Products
                </h2>
                <Link to="/add_coffees">
                    <button className="add-btn flex items-center gap-3 mx-auto">
                        <span className="drop-shadow-lg">Add Coffee</span>
                        <SlCup className="darker" />
                    </button>
                </Link>
            </div>

            <div className="max-w-[1320px] mx-auto h-[calc(1189px-140px)] overflow-scroll scrollable-content">

                <div className="grid grid-cols-1 lg:grid-cols-2 my-12 overflow-scroll md:overflow-auto">

                    {

                        coffees.map(coffee => <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}>

                        </CoffeeCard>)

                    }

                </div>

            </div>

        </div>
    );
};

export default Products;