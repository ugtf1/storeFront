import React from 'react';
import './CategoriesCard.css';

const CategoryCard = ({ title, imageUrl }) => (
  <div className="category-card">
    <img src={imageUrl} alt={title} className="category-image" />
    <div className="category-title">{title}</div>
  </div>
);

export default CategoryCard;