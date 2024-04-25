import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {

    const coffee = useLoaderData();

    const { name, quantity, supplier, taste, category, details, photo } = coffee;

    console.log(coffee);

    return (
        <div className="bg-[url('https://i.imgur.com/CvCEuhS.png')]">
            <div className="max-w-[1440px] mx-auto">

                <div className="p-10">
                    <Link to='/' className="text-3xl flex items-center gap-4 font-rancho">
                        <BsArrowLeft />
                        Back to home
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row space-y-12 lg:space-y-0 justify-evenly items-center px-12 py-28 my-28 bg-[#F5F4F1] bg-opacity-80 rounded-lg">
                    <div className="mx-auto">
                        <img src={photo} alt="" />
                    </div>

                    <div className="md:max-w-[408px] lg:max-w-[600px] xl:max-w-full">
                        <div className="space-y-4 text-xl md:col-span-3">
                            <p className="font-light"><span className="font-semibold">Name: </span>{name}</p>
                            <p className="font-light"><span className="font-semibold">Quantity: </span>{quantity}</p>
                            <p className="font-light"><span className="font-semibold">Supplier: </span>{supplier}</p>
                            <p className="font-light"><span className="font-semibold">Taste: </span>{taste}</p>
                            <p className="font-light"><span className="font-semibold">Category: </span>{category}</p>
                            <p className="font-light"><span className="font-semibold">Details: </span>{details}</p>
                        </div>


                    </div>

                </div>
            </div>
        </div >
    );
};

export default Details;