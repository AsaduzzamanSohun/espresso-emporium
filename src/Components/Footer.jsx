import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className=" h-[776px] bg-[url('https://i.imgur.com/4MgIrCf.jpg')]">
                <div className="max-w-[1320px] md:p-10 xl:p-0 xl:py-10 mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
                    <nav className="mt-20 text-center md:text-start">

                        <div className="space-y-2 md:space-y-8 lg:mt-8">
                            <img className="w-[45px] md:w-[75px] mx-auto md:mx-0" src="https://i.imgur.com/YeGYiVO.png" alt="" />

                            <h2 className="text-xl md:text-[32px] lg:text-[45px] font-rancho dark drop-shadow-md">Espresso Emporium</h2>

                            <p className="font-raleway dark text-xs md:text-base lg:text-lg md:leading-loose px-8 md:px-0 max-w-[663px] md:w-[320px] lg:w-[460px] xl:w-[663px]">
                                Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                            </p>
                        </div>

                        <div className="flex gap-4 text-[16px] md:text-[32px] lg:text-[40px] dark mt-4 md:mt-8 justify-center md:justify-start">
                            <span><FaFacebook></FaFacebook></span>
                            <span><FaTwitter></FaTwitter></span>
                            <span><FaInstagram></FaInstagram></span>
                            <span><FaLinkedin></FaLinkedin></span>
                        </div>

                        <h2 className="md:text-[32px] lg:text-[45px] font-rancho dark drop-shadow-md mt-6">Get in Touch</h2>

                        <div className="md:space-y-2 xl:space-y-4 mt-4 md:mt-8 text-center mx-auto flex flex-col items-center md:items-start justify-center">
                            <div className="flex gap-4 md:text-[20px] dark text-xs md:text-base">
                                <span className="flex items-center"><FaPhone></FaPhone></span>
                                <p className="font-raleway dark">
                                    +88 01533 333 333
                                </p>
                            </div>
                            <div className="flex gap-4 md:text-[20px] dark text-xs md:text-base">
                                <span className="flex items-center"><MdMail></MdMail></span>
                                <p className="font-raleway dark">info@gmail.com</p>
                            </div>
                            <div className="flex gap-4 md:text-[20px] dark text-xs md:text-base">
                                <span className="flex items-center"><FaLocationArrow></FaLocationArrow></span>
                                <p className="font-raleway dark">72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>
                    </nav>

                    <nav className="mt-12 lg:mt-36">
                        <h2 className="md:text-[32px] lg:text-[45px] font-rancho dark drop-shadow-md mb-4 text-center md:text-start">Get in Touch</h2>
                        <form className="flex flex-col gap-4 lg:w-[400px] xl:w-[503px]" action="">
                            <input className="w-full px-4 py-3 font-raleway" type="text" name="name" placeholder="Name" />
                            <input className="w-full px-4 py-3 font-raleway" type="email" name="email" placeholder="Email" />
                            <textarea className="w-full px-4 py-3 font-raleway resize-none" name="message" id="" cols="30" rows="4" placeholder="Message"></textarea>
                            <input className="submit text-sm md:text-xl max-w-[150px] mx-auto md:mx-0" type="submit" value="Send Message" />
                        </form>
                    </nav>
                </div>
            </div>

            <div className="bg-[url('https://i.imgur.com/Rx8dmxo.jpg')] h-[50px] flex justify-center items-center md:text-lg">
                <p className="font-rancho text-white text-center">Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>


        </footer>
    );
};

export default Footer;