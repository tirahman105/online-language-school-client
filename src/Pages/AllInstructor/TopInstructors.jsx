import  { useEffect, useState } from 'react';

import TopInstructorCard from './TopInstructorCard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const TopInstructors = () => {
  const [topInstructors, setTopInstructors] = useState([]);

  useEffect(() => {
    fetch('https://summer-camp-school-server-opal.vercel.app/topInstructors')
      .then(response => response.json())
      .then(data => {
        setTopInstructors(data);
      })
      .catch(error => {
        console.log('Error:', error);
       
      });
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading={"Discover Our Top Instructors"}
        heading={"Top Instructors"}
      ></SectionTitle>
     <div className='grid grid-cols-1 md:grid-cols-3'>
     {topInstructors?.map((instructor, index) => (
        <TopInstructorCard
          key={index}
          instructor={instructor}
        />
      ))}
     </div>
    </div>
  );
};

export default TopInstructors;
