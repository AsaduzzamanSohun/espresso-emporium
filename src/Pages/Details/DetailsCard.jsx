
const DetailsCard = ({coffee}) => {

    const { _id, name, quantity, photo, price } = coffee;

    return (
        <div key={coffee._id} className="flex flex-col md:flex-row items-center justify-between my-4 mx-4 md:gap-2 md:p-8 bg-[#F5F4F1] bg-opacity-80 rounded-lg">
                        <div>
                            <img src={photo} alt="" />
                        </div>

                        <div className="flex items-center justify-between gap-16 lg:gap-0 mb-4 md:grid md:grid-cols-4">
                            <div className="space-y-4 text-xl md:col-span-3">
                                <p className="font-light"><span className="font-semibold">Name: </span>{name}</p>
                                <p className="font-light"><span className="font-semibold">Quantity: </span>{quantity}</p>
                                <p className="font-light"><span className="font-semibold">Price: </span>{price}</p>
                            </div>
                            

                        </div>

                    </div>
    );
};

export default DetailsCard;