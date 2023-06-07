import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Online Language School | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};


export default Home;