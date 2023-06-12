import  { useEffect, useState } from 'react';

import TopInstructorCard from './TopInstructorCard';

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
      <h2 className='text-3xl my-10 text-center'>Top Instructors</h2>
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
