
const DownBanner = () => {
    return (
        <div className="bg-[#ECEAE3]" >
            <div className="max-w-[1440px] mx-auto md:px-4 lg:px-8 xl:px-0 py-12 flex flex-col md:flex-row items-center justify-between gap-4 font-raleway">
                <div className="space-y-3 text-center md:text-start px-16 py-4 md:p-0">
                    <img className="mx-auto md:mx-0" src="https://i.imgur.com/Az24cXw.png" alt="" />
                    <h3 className="text-2xl lg:text-4xl font-rancho dark">Awesome Aroma</h3>
                    <p className="darker">
                        You will definitely be a fan of the design & aroma of your coffee
                    </p>
                </div>
                <div className="space-y-3 text-center md:text-start px-12 py-4 md:p-0">
                    <img className="mx-auto md:mx-0" src="https://i.imgur.com/uOkDEwL.png" alt="" />
                    <h3 className="text-2xl lg:text-4xl font-rancho dark">High Quality</h3>
                    <p className="darker">
                        We served the coffee to you maintaining the best quality
                    </p>
                </div>
                <div className="space-y-3 text-center md:text-start px-12 py-4 md:p-0">
                    <img className="mx-auto md:mx-0" src="https://i.imgur.com/HNS15QB.png" alt="" />
                    <h3 className="text-2xl lg:text-4xl font-rancho dark">Pure Grades</h3>
                    <p className="darker">
                        The coffee is made of the green coffee beans which you will love
                    </p>
                </div>
                <div className="space-y-3 text-center md:text-start px-12 py-4 md:p-0">
                    <img className="mx-auto md:mx-0" src="https://i.imgur.com/s2eja6c.png" alt="" />
                    <h3 className="text-2xl lg:text-4xl font-rancho dark">Proper Roasting</h3>
                    <p className="darker">
                        Your coffee is brewed by first roasting the green coffee beans
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DownBanner;