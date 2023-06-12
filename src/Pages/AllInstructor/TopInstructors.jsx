import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';
import TopInstructorCard from './TopInstructorCard';

const TopInstructors = () => {
  const [topInstructors, setTopInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/topInstructors')
      .then(response => response.json())
      .then(data => {
        setTopInstructors(data);
      })
      .catch(error => {
        console.log('Error:', error);
        // Handle any errors that occurred during the fetch request
      });
  }, []);

  return (
    <div>
      <h2>Top Instructors</h2>
      {topInstructors.map((instructor, index) => (
        <TopInstructorCard
          key={index}
          instructor={instructor}
        />
      ))}
    </div>
  );
};

export default TopInstructors;
