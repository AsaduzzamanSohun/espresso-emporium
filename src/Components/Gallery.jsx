
const Gallery = () => {
    return (
        <div className="max-w-[1440px] mx-auto my-24">
            <div className="text-center space-y-4 mb-12">
                <h4>Follow Us Now</h4>
                <h2 className="font-rancho text-4xl dark">
                    Follow on Instagram
                </h2>

            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-4 lg:gap-8">
                    <img className="w-[150px] xl:w-[312px]" src="https://i.imgur.com/ZfZwZAI.png" alt="" />
                    <img className="w-[150px] xl:w-[312px]" src="https://i.imgur.com/9DBuLwm.png" alt="" />
                    <img className="w-[150px] xl:w-[312px]" src="https://i.imgur.com/8HQpe8F.png" alt="" />
                    <img className="w-[150px] xl:w-[312px]" src="https://i.imgur.com/7FTbNV4.png" alt="" />
                    <img className="w-[150px] xl:w-[312px]" src="https://i.imgur.com/3N7bK8c.png" alt="" />
                    <img className="w-[150px] xl:w-[312px]" src="https://i.imgur.com/TNPLMhH.png" alt="" />
                    <img className="w-[150px] xl:w-[312px]" src="https://i.imgur.com/KUooiKy.png" alt="" />
                    <img className="w-[150px] xl:w-[312px]" src="https://i.imgur.com/2fllUFZ.png" alt="" />
                </div>
            </div>



        </div>
    );
};

export default Gallery;