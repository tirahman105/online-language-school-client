// // import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// // import SingleClass from "../../Shared/SingleClass/SingleClass";
// // import useClasses from "../../../hooks/useClasses";

// // const PopularClasses = () => {

// //   const [classes] = useClasses();
// //   const popular = classes.filter(singleClass => singleClass.category === 'popular')
 
 

// //   return (
// //     <section className="my-8">
// //       <SectionTitle
// //         subHeading={"Discover Our Popular English Courses for Every Skill Level"}
// //         heading={"Popular Classes"}
// //       ></SectionTitle>
// //        <div className="grid md:grid-cols-3 gap-4">
// //                 {
// //                     popular.map(singleClass=> <SingleClass
// //                     key={singleClass._id}
// //                     singleClass= {singleClass}>
// //                     </SingleClass>)
// //                 }
// //              </div>
// //     </section>
// //   );
// // };

// // export default PopularClasses;


// import  { useEffect, useState } from 'react';

// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// function PopularClasses() {
//   const [popularClasses, setPopularClasses] = useState([]);
//   const [axiosSecure]= useAxiosSecure();
// console.log(popularClasses);
//   useEffect(() => {
//     fetchPopularClasses();
//   }, []);

//   async function fetchPopularClasses() {
//     try {
//       const response = await axiosSecure.get('/paymentsPopular?sort=desc&limit=6');
//       const data = response.data;
//       setPopularClasses(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   return (
//     <div>
//       <h1>Popular Classes: {popularClasses?.length}</h1>
//       <ul>
//         {popularClasses?.map((classItem) => (
//           <li key={classItem._id}>{classItem.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PopularClasses;
import React, { useEffect, useState } from 'react';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import PopularCard from './PopularCard';

function PopularClasses() {
  const [popularClasses, setPopularClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    fetchPopularClasses();
  }, []);

  async function fetchPopularClasses() {
    try {
      const response = await axiosSecure.get('/paymentsPopular?sort=desc&limit=6');
      const data = response.data;

      // Map over the popular classes and fetch additional information
      const updatedClasses = await Promise.all(
        data.map(async (classItem) => {
          const response = await axiosSecure.get(`/bookedClasses/${classItem._id}`);
          const bookedClass = response.data;
          return { ...classItem, ...bookedClass };
        })
      );

      setPopularClasses(updatedClasses);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <section className="my-8">
      <SectionTitle
        subHeading="Discover Our Popular English Courses for Every Skill Level"
        heading="Popular Classes"
      />
      <div className="grid md:grid-cols-3 gap-4">
        {popularClasses.length}
        {popularClasses.map((singleClass) => (
          <PopularCard
            key={singleClass._id}
            singleClass={singleClass}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularClasses;


