import animationTest from "../../../assets/lottiAnimation.json";
import Lottie from "lottie-react";

const AnimationSection = () => {
  return (
    <div>
      <h1>This is A section test</h1>
      <div className="grid grid-cols-2">
        <div className="w-full">
          <Lottie animationData={animationTest}></Lottie>
          {/*  */}
        </div>
        <div>
          <h1 className="text-5xl text-center">Why choose our course</h1>
          <div className="flex flex-col gap-3 w-1/2 mx-auto">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Expert Language Instructors</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Comprehensive Course Curriculum</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Interactive Learning Experience</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Personalized Learning</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationSection;
