import animationTest from "../../../assets/lottiAnimation.json";
import Lottie from "lottie-react";

const AnimationSection = () => {
  return (
    <div>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10">
        <div className="w-full">
          <Lottie animationData={animationTest}></Lottie>
          {/*  */}
        </div>
        <div>
        <h1 className="text-5xl text-center my-10">Why choose our course</h1>
          <div className="flex flex-col gap-3 w-2/3 mx-auto">

           
            <div className="flex justify-center items-center border p-4 rounded-lg hover:bg-slate-200">
                <img
                  className="w-2/12 mx-auto"
                  src="https://cdn-icons-png.flaticon.com/512/2799/2799318.png"
                  alt=""
                />
                <h1 className="text-2xl  ml-10">Interactive Learning Experience</h1>
            </div>
            <div className="flex justify-center items-center border p-4 rounded-lg hover:bg-slate-200">
                <img
                  className="w-2/12 mx-auto"
                  src="https://cdn-icons-png.flaticon.com/512/3938/3938756.png"
                  alt=""
                />
                <h1 className="text-2xl  ml-10">Expert Language Instructors</h1>
            </div>
            <div className="flex justify-center items-center border p-4 rounded-lg hover:bg-slate-200">
                <img
                  className="w-2/12 mx-auto"
                  src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png"
                  alt=""
                />
                <h1 className="text-2xl  ml-10">Comprehensive Course Curriculum</h1>
            </div>
            <div className="flex justify-center items-center border p-4 rounded-lg hover:bg-slate-200">
                <img
                  className="w-1/4 mx-auto"
                  src="https://cdn-icons-png.flaticon.com/512/6427/6427307.png"
                  alt=""
                />
                <h1 className="text-2xl  ml-10">Supportive Learning Community</h1>
            </div>
            {/* <div className="stats shadow">
              <div className="stat">
                <img
                  className="w-1/4 mx-auto"
                  src="https://cdn-icons-png.flaticon.com/512/3938/3938756.png"
                  alt=""
                />
                <div className="text-2xl">Expert Language Instructors</div>
              </div>
            </div>

            <div className="stat">
              
              
              <div className="text-3xl">Expert Language Instructors</div>
              
              <div className="stat-figure text-secondary">
              <img
                  className="w-1/4 mx-auto"
                  src="https://cdn-icons-png.flaticon.com/512/3938/3938756.png"
                  alt=""
                />
              </div>
            </div>

            <div className="stats shadow">
              <div className="stat">
                <img
                  className="w-1/4 mx-auto"
                  src="https://cdn-icons-png.flaticon.com/512/3938/3938756.png"
                  alt=""
                />
                <div className="text-2xl">Comprehensive Course Curriculum</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">
                  Interactive Learning Experience
                </div>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationSection;
