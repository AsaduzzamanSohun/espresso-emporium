import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CoffeeCard = ({coffee}) => {

    const {_id, name, quantity, photo, price} = coffee;


    const hadleDelete = _id => {
        console.log(coffee._id);
    }


    return (
        <div className="flex flex-col md:flex-row items-center justify-between my-4 mx-4 md:gap-2 md:p-8 bg-[#F5F4F1] bg-opacity-80 rounded-lg">
            <div>
                <img src={photo} alt="" />
            </div>

            <div className="flex items-center justify-between gap-16 lg:gap-0 mb-4 md:grid md:grid-cols-4">
                <div className="space-y-4 text-xl md:col-span-3">
                    <p className="font-light"><span className="font-semibold">Name: </span>{name}</p>
                    <p className="font-light"><span className="font-semibold">Quantity: </span>{quantity}</p>
                    <p className="font-light"><span className="font-semibold">Price: </span>{price}</p>
                </div>
                <div className="flex flex-col gap-3 text-white md:m-8 md:col-span-1">
                    <Link to='/' ><button className="p-2 rounded-md bg-[#D2B48C]"><FaEye    ></FaEye></button></Link>
                    <Link to='/' ><button className="p-2 rounded-md bg-[#3C393B]"><MdEdit   ></MdEdit></button></Link>
                    <Link onClick={() => hadleDelete(coffee._id)} to='/' ><button className="p-2 rounded-md bg-[#EA4744]"><MdDelete ></MdDelete></button> </Link>
                </div>

            </div>

        </div>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    coffee: PropTypes.object
}