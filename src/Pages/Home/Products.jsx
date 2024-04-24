
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
                            setCoffees={setCoffees}></CoffeeCard>)

                    }


                    {/* <div className="flex flex-col md:flex-row items-center justify-around my-4 mx-4 md:gap-8 md:p-8 bg-[#F5F4F1] bg-opacity-80 rounded-lg">
                        <div>
                            <img src="https://i.imgur.com/38iqP33.png" alt="" />
                        </div>

                        <div className="flex items-center justify-between gap-16 mb-4">
                            <div className="space-y-4 text-xl">
                                <p className="font-light"><span className="font-semibold">Nameee: </span>American Coffee</p>
                                <p className="font-light"><span className="font-semibold">Chef: </span>Mr. Martin Paul</p>
                                <p className="font-light"><span className="font-semibold">Price: </span>890 Taka</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white md:m-8">
                                <Link to='/' ><button className="p-2 rounded-md bg-[#D2B48C]"><FaEye    ></FaEye></button></Link>
                                <Link to='/' ><button className="p-2 rounded-md bg-[#3C393B]"><MdEdit   ></MdEdit></button></Link>
                                <Link to='/' ><button className="p-2 rounded-md bg-[#EA4744]"><MdDelete ></MdDelete></button> </Link>
                            </div>

                        </div>

                    </div>



                    <div className="flex flex-col md:flex-row items-center justify-around my-4 mx-4 md:gap-8 md:p-8 bg-[#F5F4F1] bg-opacity-80 rounded-lg">
                        <div>
                            <img src="https://i.imgur.com/38iqP33.png" alt="" />
                        </div>

                        <div className="flex items-center justify-between gap-16 mb-4">
                            <div className="space-y-4 text-xl">
                                <p className="font-light"><span className="font-semibold">Name: </span>American Coffee</p>
                                <p className="font-light"><span className="font-semibold">Chef: </span>Mr. Martin Paul</p>
                                <p className="font-light"><span className="font-semibold">Price: </span>890 Taka</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white md:m-8">
                                <Link to='/' ><button className="p-2 rounded-md bg-[#D2B48C]"><FaEye    ></FaEye></button></Link>
                                <Link to='/' ><button className="p-2 rounded-md bg-[#3C393B]"><MdEdit   ></MdEdit></button></Link>
                                <Link to='/' ><button className="p-2 rounded-md bg-[#EA4744]"><MdDelete ></MdDelete></button> </Link>
                            </div>

                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row items-center justify-around my-4 mx-4 md:gap-8 md:p-8 bg-[#F5F4F1] bg-opacity-80 rounded-lg">
                        <div>
                            <img src="https://i.imgur.com/38iqP33.png" alt="" />
                        </div>

                        <div className="flex items-center justify-between gap-16 mb-4">
                            <div className="space-y-4 text-xl">
                                <p className="font-light"><span className="font-semibold">Name: </span>American Coffee</p>
                                <p className="font-light"><span className="font-semibold">Chef: </span>Mr. Martin Paul</p>
                                <p className="font-light"><span className="font-semibold">Price: </span>890 Taka</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white md:m-8">
                                <Link to='/' ><button className="p-2 rounded-md bg-[#D2B48C]"><FaEye    ></FaEye></button></Link>
                                <Link to='/' ><button className="p-2 rounded-md bg-[#3C393B]"><MdEdit   ></MdEdit></button></Link>
                                <Link to='/' ><button className="p-2 rounded-md bg-[#EA4744]"><MdDelete ></MdDelete></button> </Link>
                            </div>

                        </div>

                    </div>



                    <div className="flex flex-col md:flex-row items-center justify-around my-4 mx-4 md:gap-8 md:p-8 bg-[#F5F4F1] bg-opacity-80 rounded-lg">
                        <div>
                            <img src="https://i.imgur.com/38iqP33.png" alt="" />
                        </div>

                        <div className="flex items-center justify-between gap-16 mb-4">
                            <div className="space-y-4 text-xl">
                                <p className="font-light"><span className="font-semibold">Name: </span>American Coffee</p>
                                <p className="font-light"><span className="font-semibold">Chef: </span>Mr. Martin Paul</p>
                                <p className="font-light"><span className="font-semibold">Price: </span>890 Taka</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white md:m-8">
                                <Link to='/' ><button className="p-2 rounded-md bg-[#D2B48C]"><FaEye    ></FaEye></button></Link>
                                <Link to='/' ><button className="p-2 rounded-md bg-[#3C393B]"><MdEdit   ></MdEdit></button></Link>
                                <Link to='/' ><button className="p-2 rounded-md bg-[#EA4744]"><MdDelete ></MdDelete></button> </Link>
                            </div>

                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row items-center justify-around my-4 mx-4 md:gap-8 md:p-8 bg-[#F5F4F1] bg-opacity-80 rounded-lg">
                        <div>
                            <img src="https://i.imgur.com/38iqP33.png" alt="" />
                        </div>

                        <div className="flex items-center justify-between gap-16 mb-4">
                            <div className="space-y-4 text-xl">
                                <p className="font-light"><span className="font-semibold">Name: </span>American Coffee</p>
                                <p className="font-light"><span className="font-semibold">Chef: </span>Mr. Martin Paul</p>
                                <p className="font-light"><span className="font-semibold">Price: </span>890 Taka</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white md:m-8">
                                <Link to='/' ><button className="p-2 rounded-md bg-[#D2B48C]"><FaEye    ></FaEye></button></Link>
                                <Link to='/' ><button className="p-2 rounded-md bg-[#3C393B]"><MdEdit   ></MdEdit></button></Link>
                                <Link to='/' ><button className="p-2 rounded-md bg-[#EA4744]"><MdDelete ></MdDelete></button> </Link>
                            </div>

                        </div>

                    </div> */}



                </div>

            </div>

        </div>
    );
};

export default Products;