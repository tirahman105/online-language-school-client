import React from 'react';

function PopularCard({ singleClass }) {
  const { name, image, instructor, category, price } = singleClass;

  return (
    <div className="single-class-card">
      <img src={image} alt={name} className="class-image" />
      <h2 className="class-name">{name}</h2>
      <p className="class-instructor">Instructor: {instructor}</p>
      <p className="class-category">Category: {category}</p>
      <p className="class-price">Price: ${price}</p>
    </div>
  );
}

export default PopularCard;
