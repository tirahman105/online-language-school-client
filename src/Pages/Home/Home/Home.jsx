import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import AnimationSection from "../Animation/AnimationSection";
import TopInstructors from "../../AllInstructor/TopInstructors";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Online Language School | Home</title>
            </Helmet>
            <Banner></Banner>
            <AnimationSection></AnimationSection>
            <TopInstructors></TopInstructors>
            <PopularClasses></PopularClasses>
        </div>
    );
};


export default Home;