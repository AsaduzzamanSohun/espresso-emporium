import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-[1440px] mx-auto">

                <div className="my-16">
                    <Link to='/' className="text-3xl flex items-center justify-center gap-4 font-rancho">
                        <BsArrowLeft />
                        Back to home
                    </Link>
                </div>

                <div>
                    <img className="mx-auto my-20" src="https://i.imgur.com/pDwHk8r.gif" alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;