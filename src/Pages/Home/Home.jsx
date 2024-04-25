import { ScrollRestoration } from "react-router-dom";
import Banner from "../../Components/Banner";
import DownBanner from "../../Components/DownBanner";
import Gallery from "../../Components/Gallery";
import Products from "./Products";


const Home = () => {

    ScrollRestoration('/');

    return (
        <main>
            <Banner></Banner>
            <DownBanner></DownBanner>
            <Products></Products>
            <Gallery></Gallery>
        </main>
    );
};

export default Home;