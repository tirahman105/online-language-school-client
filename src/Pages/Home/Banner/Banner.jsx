import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/home/img1.png';
import img2 from '../../../assets/home/img2.png';
import img3 from '../../../assets/home/img3.png';
import { Typewriter } from 'react-simple-typewriter'

import './Banner.css';


const Banner = () => {
   
    return (
        <Carousel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <div className="flex justify-center items-center">
                  <div>
                  <div  >
                        {/* <h1 className="text-5xl lg:text-7xl  font-extrabold text-blue-900 px-10">Speak <span className="text-red-800">ENGLISH</span><br />
                        Like an Expert!</h1> <br /> */}
                        <h1 className="text-5xl lg:text-7xl  font-extrabold text-blue-900 px-10 mb-8">
        Learn {' '} 
        <span className="text-5xl lg:text-7xl  font-extrabold text-red-800 ">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['English', 'Spanish', 'Hindi', 'Arabic', 'German']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
         
        </span>
        </h1>
                    </div>
                        <button className="btn bg-red-800 text-white hover:bg-blue-900">Get Started!</button>
                  </div>
                  </div>
                    <img src={img1} />
                    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <div className="flex justify-center items-center">
                  <div>
                  <div  >
                    
                        <h1 className="text-5xl lg:text-7xl  font-extrabold text-blue-900 px-10"> Learn <span className="text-red-800">ONLINE</span> <br />
                        </h1>
                         <br />
                    </div>
                        <button className="btn bg-red-800 text-white hover:bg-blue-900">Get Started!</button>
                  </div>
                  </div>
                    <img src={img2} />
                    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <div className="flex justify-center items-center">
                  <div>
                  <div  >
                    <p className="text-6xl">Learn From</p>
                        <h1 className="text-5xl lg:text-7xl  font-extrabold text-blue-900 px-10"> <span className="text-red-800">Expert</span> <br />
                        Instructors!</h1>
                         <br />
                    </div>
                        <button className="btn bg-red-800 text-white hover:bg-blue-900">Get Started!</button>
                  </div>
                  </div>
                    <img src={img3} />
                    
                </div>
             
                
            </Carousel>
    );
};

export default Banner;