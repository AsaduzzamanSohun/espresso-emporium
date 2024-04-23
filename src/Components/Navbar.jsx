
const Navbar = () => {
    return (
        <nav className="bg-[#372727] bg-[url('https://i.imgur.com/4KthWU0.jpg')] bg-repeat-x">
            <div className="flex justify-center items-center gap-4 py-4">
                <img className="w-[45px] md:w-[75px]" src="https://i.imgur.com/YeGYiVO.png" alt="" />
                <h1 className="text-2xl lg:text-4xl xl:text-6xl text-white font-rancho">Espresso Emporium</h1>
            </div>
        </nav>
    );
};

export default Navbar;