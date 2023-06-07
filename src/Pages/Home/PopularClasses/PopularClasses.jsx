import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SingleClass from "../../Shared/SingleClass/SingleClass";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
      fetch('classes.json')
      .then(res => res.json())
      .then(data => {
          const popularClasses = data.filter(singleClass => singleClass.category === 'popular');
       setClasses(popularClasses)} )
  },[])

  return (
    <section>
      <SectionTitle
        subHeading={"Discover Our Popular English Courses for Every Skill Level"}
        heading={"Popular Classes"}
      ></SectionTitle>
       <div className="grid md:grid-cols-3 gap-4">
                {
                    classes.map(singleClass=> <SingleClass
                    key={singleClass._id}
                    singleClass= {singleClass}>
                    </SingleClass>)
                }
             </div>
    </section>
  );
};

export default PopularClasses;


