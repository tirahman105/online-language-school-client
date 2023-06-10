import animationTest from "../../../assets/lottiAnimation.json"
import Lottie from "lottie-react"

const AnimationSection = () => {
    return (
        <div>
            <h1>This is A section test</h1>
           <div className="w-1/2">
            <Lottie animationData={animationTest}></Lottie>
            {/*  */}
            </div> 
        </div>
    );
};

export default AnimationSection;