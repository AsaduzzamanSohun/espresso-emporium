
import { SlCup } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";




const Products = () => {
    return (
        <div className="font-raleway bg-[url('https://i.imgur.com/8p9bufu.png')] h-[1189px] my-28">


            <div className="text-center space-y-4 mb-12">
                <h4>--- Sip & Savor ---</h4>
                <h2 className="font-rancho text-4xl dark">
                    Our Popular Products
                </h2>
                <button className="add-btn flex items-center gap-3 mx-auto">
                    <span className="drop-shadow-lg">Add Coffee</span>
                    <SlCup className="darker" />
                </button>
            </div>

            <div className="max-w-[1448px] mx-auto h-[calc(1189px-140px)] overflow-scroll scrollable-content">

                <div className="grid grid-cols-1 xl:grid-cols-2 xl:space-x-8 my-12 overflow-scroll md:overflow-auto">

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

                    

                </div>

            </div>

        </div>
    );
};

export default Products;