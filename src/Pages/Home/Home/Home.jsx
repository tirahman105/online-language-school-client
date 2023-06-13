import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import AnimationSection from "../Animation/AnimationSection";
import TopInstructors from "../../AllInstructor/TopInstructors";
import SingleClass from "../../Shared/SingleClass/SingleClass";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Online Language School | Home</title>
            </Helmet>
            <Banner></Banner>
            <AnimationSection></AnimationSection>
            <PopularClasses></PopularClasses>
            <TopInstructors></TopInstructors>
            
        </div>
    );
};


export default Home;