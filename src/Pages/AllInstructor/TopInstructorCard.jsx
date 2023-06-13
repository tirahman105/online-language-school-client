
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const TopInstructorCard = ({ instructor }) => {
  const {name, email, totalPayments, image } = instructor;
  useEffect(()=> {
    Aos.init({duration: 1500});
  },[])

  return (
    <div data-aos="fade-right" className="m-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl border border-white">
        <figure className="hover:scale-110 transition-transform">
          <img className="h-48 object-cover" src={image} alt="Instructor" />
        </figure>
        <div className="card-body p-8 bg-slate-200 mt-5">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Email: {email}</h2>
          <p>Total Enrolled Students: {totalPayments}</p>
        </div>
      </div>
    </div>
  );
};

export default TopInstructorCard;
