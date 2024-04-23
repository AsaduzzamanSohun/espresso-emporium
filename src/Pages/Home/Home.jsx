import Banner from "../../Components/Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Banner></Banner>
            <h1>Buy me a coffee</h1>
            <Footer></Footer>
        </main>
    );
};

export default Home;