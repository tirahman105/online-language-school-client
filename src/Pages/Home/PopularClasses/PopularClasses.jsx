// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import SingleClass from "../../Shared/SingleClass/SingleClass";
// import useClasses from "../../../hooks/useClasses";

// const PopularClasses = () => {

//   const [classes] = useClasses();
//   const popular = classes.filter(singleClass => singleClass.category === 'popular')
 
 

//   return (
//     <section className="my-8">
//       <SectionTitle
//         subHeading={"Discover Our Popular English Courses for Every Skill Level"}
//         heading={"Popular Classes"}
//       ></SectionTitle>
//        <div className="grid md:grid-cols-3 gap-4">
//                 {
//                     popular.map(singleClass=> <SingleClass
//                     key={singleClass._id}
//                     singleClass= {singleClass}>
//                     </SingleClass>)
//                 }
//              </div>
//     </section>
//   );
// };

// export default PopularClasses;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PopularClasses() {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetchPopularClasses();
  }, []);

  async function fetchPopularClasses() {
    try {
      const response = await axios.get('/paymentsPopular?sort=desc&limit=6');
      const data = response.data;
      setPopularClasses(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h1>Popular Classes: {popularClasses.length}</h1>
      <ul>
        {popularClasses.map((classItem) => (
          <li key={classItem._id}>{classItem.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PopularClasses;
